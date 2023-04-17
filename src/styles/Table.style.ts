import styled from 'styled-components';

const StyledTable = styled.div`
  margin-top: 5%;
  font-size: 0.9rem;
  overflow: auto;
  height: 50vh;
  width: 95%;
  place-self: center;

  & table {
    border-collapse: collapse;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  & thead tr {
    background-color: #2E3035;
    color: #fff;
    text-align: center;
  }
  
  & th {
    padding: 2rem;
  }

  & tbody tr {
    border-bottom: 1px solid #fff;
  }

  & tbody td {
    padding: 15px 20px;
    text-align: center;
    color: #fff;
    padding: 2rem;
    font-size: 1rem;
    font-weight: bolder;
    background-color: rgba(18, 18, 19, 0.3)
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: rgba(0, 0 ,0 , 0.1);
    border: white solid 1px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255 ,255 , 0.1);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255 ,255 , 0.5);
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

`;

export default StyledTable;