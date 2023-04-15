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
    padding: 1rem;
    outline: none;
  }

  & #column-filter {
  }

  & #comparison-filter {
  }

  & #value-filter {

  }
`;

export default Form;