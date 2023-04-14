import styled from 'styled-components';

const StyledTable = styled.div`
  border-collapse: collapse;
  margin: 25px 20px;
  font-size: 0.9rem;
  max-height: 70vh;
  border-radius: 5px 5px 0 0;
  overflow: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  & thead tr {
    background-color: black;
    color: #fbe61a;
    text-align: center;
  }

  & th {
    padding: 2rem;
  }

  & tbody tr {
    border-bottom: 1px solid #ddd;
  }

  & tbody td {
    padding: 15px 20px;
    text-align: center;
  }

  & tbody tr:nth-child(even) {
    background-color: #f3f3f3;
  }

  & tbody tr:last-child {
    border-bottom: 4px solid black;
  }
`;

export default StyledTable;