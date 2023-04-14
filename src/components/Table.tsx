import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Loading from './Loading';
import title from '../services/title';
import { MyContextType, PlanetKey } from '../@types/search';
import StyledTable from '../styles/Table.style';

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
  }: MyContextType = useContext(MyContext) ?? {} as MyContextType;

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
              .map(({ column }) => column).includes(criteria as PlanetKey))
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

      <StyledTable>
        <table>

          <thead>
            <tr>
              { formatedHeaders.map((head, index) => (
                <th key={ index }>{ head }</th>
              ))}
            </tr>
          </thead>
          <tbody>
            { planets.filter(() => handleData).map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </StyledTable>
    </div>
  );
}

export default Table;
