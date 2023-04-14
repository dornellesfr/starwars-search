export type IPlanet = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
  residents?: string[];
}

export type IFilters = {
  byName: { name: string } | { name: ''};
  byNumericValues: Numeric[];
}

export type PlanetKey = 'population' | 'orbital_period' | 'diameter' | 'rotation_period' | 'surface_water';

export type Numeric = {
  column: PlanetKey;
  comparison: 'maior que' | 'menor que' | 'igual a';
  value: number;
}

export type MyContextType = {
  planets: IPlanet[];
  filter: IFilters;
  searchPlanetByName: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  columnFilter: ({ target }: React.ChangeEvent<HTMLSelectElement>) => void;
  comparisonFilter: ({ target }: React.ChangeEvent<HTMLSelectElement>) => void;
  valueFilter: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  filterButton: () => void;
  filterNumerics: Numeric[];
  header: IPlanet[];
  handleData: (planet: IPlanet) => boolean;
  optionsNumeric: string[];
};
