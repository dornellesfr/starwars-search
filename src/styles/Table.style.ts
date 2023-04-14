import styled from 'styled-components';

const StyledTable = styled.div`
  margin-top: 80px;
  font-size: 0.9rem;
  overflow: auto;
  height: 50vh;

  & table {
    border-collapse: collapse;
    height: 500px;
    border-radius: 5px;
    overflow: hidden;
  }

  & thead tr {
    background-color: #000;
    color: #fbe61a;
    text-align: center;
  }
  
  & th {
    padding: 2rem;
  }

  & tbody tr {
    border-bottom: 1px solid #000;
  }

  & tbody td {
    padding: 15px 20px;
    text-align: center;
    color: #000;
    padding: 2rem;
    font-size: 1rem;
    font-weight: bolder;
  }

  & tbody tr:nth-child(even) {
    background-color: rgba(251, 230 ,26 , 0.8);
  }

  & tbody tr:nth-child(odd) {
    background-color: rgba(251, 230 ,26 , 1);
  }

  & tbody tr:last-child {
    border-bottom: 4px solid black;
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