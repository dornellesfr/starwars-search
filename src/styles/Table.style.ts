import styled from 'styled-components';

const StyledTable = styled.div`
  margin: 0;
  font-size: 0.9rem;
  border-radius: 5px 5px 0 0;
  overflow: auto;
  

  & table {
    border-collapse: collapse;
    height: 2vh;
    min-height: 400px;
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
`;

export default StyledTable;