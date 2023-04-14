import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { IPlanet, IFilters, Numeric, PlanetKey } from '../@types/search';

function Provider({ children }: React.PropsWithChildren) {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [header, setHeader] = useState<IPlanet[]>([]);
  const [filter, setFilter] = useState<IFilters>({
    byName: { name: '' },
    byNumericValues: [{ column: 'population', comparison: 'maior que', value: 0 }],
  });
  const [filterNumerics, setFilterNumerics] = useState<Numeric[]>([]);
  const [optionsNumeric] = useState<string[]>([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  type Comparison = 'maior que'; 'menor que'; 'igual a';
  useEffect(() => {
    const url = 'https://swapi.dev/api/planets';
    async function fetchPlanets() {
      try {
        const request = await fetch(url);
        const response = await request.json();
        const planetsArray: IPlanet[] | [] = response.results;

        planetsArray.forEach((planet: IPlanet ) => delete planet.residents );
        setPlanets(response.results);
        setHeader(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlanets();
  }, []);
  

  function handleData(planet: IPlanet): boolean {
    const bools: boolean[] = [];
  
    if (filterNumerics.length > 0) {
      filterNumerics.forEach((filtr: Numeric) => {
        const { column, comparison, value } = filtr;
        if (comparison === 'maior que') {
          bools.push((Number(planet[column])> Number(value)));
        }
        if (comparison === 'menor que') {
          bools.push(Number(planet[column]) < Number(value));
        }
        if (comparison === 'igual a') {
          bools.push(Number(planet[column]) === value);
        }
      });
    }
    return bools.every((el) => el);
  }

  function searchPlanetByName({ target }: React.ChangeEvent<HTMLInputElement> ) {
    setFilter({ ...filter, byName: { name: target.value } });
    setPlanets(header.filter((planet) => (
      planet.name.includes(target.value)
    )));
  }

  function columnFilter({ target }: React.ChangeEvent<HTMLSelectElement>) {
    setFilter({ ...filter,
      byNumericValues: [{ ...filter.byNumericValues[0], column: (target.value as PlanetKey) }] });
  }

  function comparisonFilter({ target }: React.ChangeEvent<HTMLSelectElement>) {
    if (target.value in { 'maior que': true, 'menor que': true, 'igual a': true }) {
      setFilter({ ...filter,
        byNumericValues: [{ ...filter.byNumericValues[0], comparison: target.value as Comparison }] });
    }
  }

  function valueFilter({ target }: React.ChangeEvent<HTMLInputElement>) {
    setFilter({ ...filter,
      byNumericValues: [{ ...filter.byNumericValues[0], value: Number(target.value) }] });
  }

  function filterButton() {
    const { byNumericValues } = filter;
    setFilterNumerics([...filterNumerics, byNumericValues[0]]);
    setFilter({
      ...filter,
      byNumericValues: [{
        column: optionsNumeric[0] as PlanetKey,
        comparison: 'maior que',
        value: 0,
      }],
    });
  }


  const contextValue = {
    planets,
    filter,
    searchPlanetByName,
    columnFilter,
    comparisonFilter,
    valueFilter,
    filterButton,
    header,
    handleData,
    optionsNumeric,
    filterNumerics,
  };

  return (
    <MyContext.Provider value={ { ...contextValue } }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
