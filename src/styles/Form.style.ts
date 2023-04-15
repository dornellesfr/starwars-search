import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  & .column-filter, .comparison-filter, .value-filter {
    display: grid;
    justify-content: center;
    gap: 5px;
    font-weight: 100;
    color: white;

  }

  & #column-filter, #comparison-filter, #value-filter {
    font-size: 1rem;
    background-color: transparent;
    border: none;
    color: white;
    padding: 0 1rem 1rem 0;
    outline: none;
  }

  & #column-filter {
    border-bottom: 2px solid white;
  }

  & #comparison-filter {
    border-bottom: 2px solid white;
  }

  & #value-filter {
  -moz-appearance: textfield;
  appearance: none;
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }

  input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
  }

`;

export default Form;