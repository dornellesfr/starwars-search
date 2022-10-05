import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [header, setHeader] = useState([]);
  const [filter, setFilter] = useState({
    byName: { name: '' },
    byNumericValues: [{ column: 'population', comparison: 'maior que', value: 0 }],
  });
  const [filterNumerics, setFilterNumerics] = useState([]);
  const [optionsNumeric] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    const url = 'https://swapi.dev/api/planets';
    async function fetchPlanets() {
      try {
        const request = await fetch(url);
        const response = await request.json();

        response.results.forEach((planet) => delete planet.residents);
        setPlanets(response.results);
        setHeader(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlanets();
  }, []);

  function handleData(planet) {
    const bools = [];

    filterNumerics.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        bools.push((planet[column] > Number(value)));
      }
      if (comparison === 'menor que') {
        bools.push(planet[column] < Number(value));
      }
      if (comparison === 'igual a') {
        bools.push(planet[column] === value);
      }
    });
    return bools.every((el) => el);
  }

  function searchPlanetByName({ target }) {
    setFilter({ ...filter, byName: { name: target.value } });
    setPlanets(header.filter((planet) => (
      planet.name.includes(target.value)
    )));
  }

  function columnFilter({ target }) {
    setFilter({ ...filter,
      byNumericValues: [{ ...filter.byNumericValues[0], column: target.value }] });
  }

  function comparisonFilter({ target }) {
    setFilter({ ...filter,
      byNumericValues: [{ ...filter.byNumericValues[0], comparison: target.value }] });
  }

  function valueFilter({ target }) {
    setFilter({ ...filter,
      byNumericValues: [{ ...filter.byNumericValues[0], value: target.value }] });
  }

  function filterButton() {
    const { byNumericValues } = filter;
    setFilterNumerics([...filterNumerics, byNumericValues[0]]);
    setFilter({ ...filter,
      byNumericValues: [{ column: optionsNumeric[0], comparison: 'maior que', value: 0 }],
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
