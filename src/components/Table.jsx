import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Loading from './Loading';
import title from '../services/title';

function Table() {
  const { planets,
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
  } = useContext(MyContext);

  if (header.length < 1) return <Loading />;
  const headers = Object.keys(header[0]);
  const formatedHeaders = headers.map((head) => (
    title(head.replace('_', ' '))
  ));

  return (
    <div>

      <label htmlFor="name-filter">
        Filtro pelo nome:
        <input
          type="text"
          id="name-filter"
          placeholder="find a planet by name"
          onChange={ searchPlanetByName }
          value={ filter.byName.name }
          data-testid="name-filter"
        />
      </label>

      <form>
        <label htmlFor="column-filter">
          Coluna:
          <select
            name="column-filter"
            id="column-filter"
            data-testid="column-filter"
            value={ filter.byNumericValues[0].column }
            onChange={ columnFilter }
          >
            { optionsNumeric.filter((criteria) => !filterNumerics
              .map(({ column }) => column).includes(criteria))
              .map((option) => (
                <option
                  id="column-filter"
                  key={ option }
                  value={ option }
                >
                  { option }
                </option>
              ))}
          </select>
        </label>

        <label htmlFor="comparison-filter">
          Operador:
          <select
            name="comparison-filter"
            id="comparison-filter"
            value={ filter.byNumericValues[0].comparison }
            onChange={ comparisonFilter }
            data-testid="comparison-filter"
          >
            <option id="comparison-filter" value="maior que">maior que</option>
            <option id="comparison-filter" value="menor que">menor que</option>
            <option id="comparison-filter" value="igual a">igual a</option>
          </select>

        </label>

        <label htmlFor="value-filter">
          <input
            type="number"
            id="value-filter"
            value={ filter.byNumericValues[0].value }
            onChange={ valueFilter }
            data-testid="value-filter"
          />
        </label>

        <button
          type="button"
          onClick={ filterButton }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>

      <table>
        <thead>
          <tr>
            { formatedHeaders.map((head, index) => (
              <th key={ index }>{ head }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { planets.filter(handleData).map((planet) => (
            <tr key={ planet.name }>
              <th>{ planet.name }</th>
              <th>{ planet.rotation_period }</th>
              <th>{ planet.orbital_period }</th>
              <th>{ planet.diameter }</th>
              <th>{ planet.climate }</th>
              <th>{ planet.gravity }</th>
              <th>{ planet.terrain }</th>
              <th>{ planet.surface_water }</th>
              <th>{ planet.population }</th>
              <th>{ planet.films }</th>
              <th>{ planet.created }</th>
              <th>{ planet.edited }</th>
              <th>{ planet.url }</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
