import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  margin: 0 auto;

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }

  input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
  }

  & .column-filter, .comparison-filter, .value-filter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:60%;
    gap: 5px;
    font-weight: 100;
    color: white;
    max-width: fit-content;
  }

  .value-filter {
    height: 50%;
    align-self: center;
  }

  & .column-filter input, .column-filter select, .comparison-filter input, .comparison-filter select, .value-filter input, .value-filter select {
    background-color: transparent;
    border: none;
    text-align: start;
    color: white;
    font-size: 1rem;
    outline: none;
    padding: 10px;
    text-indent: 0;
  }

  & .column-filter {
    border-bottom: 2px solid white;
    height: 50%;
    align-self: center;
  }

  & .column-filter option, .comparison-filter option {
    background-color: black;
  }

  & .comparison-filter {
    border-bottom: 2px solid white;
    height: 50%;
    align-self: center;
  }

  /* & .value-filter {
    width:
  } */

  & #value-filter {
  -moz-appearance: textfield;
  appearance: none;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 9px;
  
  }

  & button {
    background-color: transparent;
    color: #fae60a;
    padding: 3rem 1.5rem; 
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bolder;
    width: 8rem;
    border: 1px solid #fae60a;
    border-radius: 5px;
  }

  & button:hover {
    color: #bdad08;
    border: 1px solid #bdad08;
  }

  & button:active {
    color: #fae60a;
    border: 1px solid #fae60a;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
`;

export default Form;