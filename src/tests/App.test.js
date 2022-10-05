import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import data from './helpers/data';
import userEvent from '@testing-library/user-event';

async function waitLoading() {
    await waitFor(() => expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument())
}

describe('teste App', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        response_code: 0,
        results: data,
      }),
    });
  });
  it('should Loading is in screen', async () => {
    render(<App />);
  
    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();

    await waitLoading();
  });
  it('should inputs in screen', async () => {
    render(<App />);

    await waitLoading();

    const column = screen.getByLabelText(/coluna:/i);
    const comparison = screen.getByLabelText(/operador:/i);
    const planetName = screen.getByPlaceholderText(/find a planet by name/i);
    const button = screen.getByRole('button', { name: /filtrar/i });

    expect(global.fetch).toBeCalledTimes(1);
    expect(column).toBeInTheDocument();
    expect(comparison).toBeInTheDocument();
    expect(planetName).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it('should filter a planet by name: Tatooine', async () => {
    render(<App />);

    await waitLoading();

    const planetName = screen.getByTestId('name-filter');

    userEvent.type(planetName, 'Tatooine'); // TEM QUE SER STRING NO USEREVENT;

    const tatooine = screen.getByText(/tatooine/i);
    const alderaan = screen.queryByText(/alderaan/i);

    expect(tatooine).toBeInTheDocument();
    expect(alderaan).not.toBeInTheDocument();
  });
  it('should filter planets by diameter smallest than 12500 ', async () => {
    render(<App />);

    await waitLoading();

    const button = screen.getByRole('button', { name: /filtrar/i });

    userEvent.selectOptions(screen.getByTestId('column-filter'), ['diameter'] );
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), ['menor que'] );
    userEvent.type(screen.getByTestId('value-filter'), '12500' );
    userEvent.click(button);

    const tatooine = screen.getByText(/tatooine/i);
    const yavin = screen.queryByText(/yavin/i);
    const alderaan = screen.queryByText(/alderaan/i);

    expect(tatooine).toBeInTheDocument();
    expect(yavin).toBeInTheDocument();
    expect(alderaan).not.toBeInTheDocument();
  });
  it('should filter planets by diameter smallest than 12500 and population bigger than 5000', async () => {
    render(<App />);

    await waitLoading();

    const button = screen.getByRole('button', { name: /filtrar/i });

    userEvent.selectOptions(screen.getByTestId('column-filter'), ['diameter'] );
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), ['menor que'] );
    userEvent.type(screen.getByTestId('value-filter'), '12500' );
    userEvent.click(button);

    const tatooine = screen.getByText(/tatooine/i);
    const yavin = screen.queryByText(/yavin/i);
    const alderaan = screen.queryByText(/alderaan/i);

    expect(tatooine).toBeInTheDocument();
    expect(yavin).toBeInTheDocument();
    expect(alderaan).not.toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId('column-filter'), ['population'] );
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), ['maior que'] );
    userEvent.type(screen.getByTestId('value-filter'), '5000' );
    userEvent.click(button);

    expect(yavin).not.toBeInTheDocument();
    expect(tatooine).toBeInTheDocument();
  });
  it('should filter planets by diameter smallest than 12500 and rotation period equal 24', async () => {
    render(<App />);

    await waitLoading();

    const button = screen.getByRole('button', { name: /filtrar/i });

    userEvent.selectOptions(screen.getByTestId('column-filter'), ['rotation_period'] );
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), ['igual a'] );
    userEvent.type(screen.getByTestId('value-filter'), '24' );
    userEvent.click(button);

    const tatooine = screen.queryByText(/tatooine/i);
    const yavin = screen.queryByText(/yavin/i);
    const alderaan = screen.queryByText(/alderaan/i);

    expect(yavin).not.toBeInTheDocument();
    expect(alderaan).not.toBeInTheDocument();
    expect(tatooine).not.toBeInTheDocument();
  });
});
