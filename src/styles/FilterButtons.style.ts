import styled from 'styled-components';


const Main = styled.main`
  display: grid;
  width: 93vw;
  border: 1px solid rgba(255, 255, 255, .5);
  padding: 2rem;
  border-radius: 30px;
  margin: 0 auto;

  & .name-filter {
    display: flex;
    border: 1px #fff solid;
    border-radius: 8px;
    place-self: start center;
    width: 60%;
    height: 2vh;
    margin: 5rem;
    justify-content: space-between;
    align-items: center;
    padding: .7rem;
    background-color: rgba(255, 255, 255, .3);
  }

  & .name-filter input {
    background-color: transparent;
    border: 0 none;
    outline: 0;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    font-weight: bolder;
    color: #000;
  }

  & .search-icon {
    color: #fff;
    justify-self: end;
    margin-right: 10px;
  }

  & .search-icon:active {
    color: #000;
  }
`;

export default Main;