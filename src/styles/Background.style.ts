import styled from 'styled-components';

const Background = styled.div`
  display: table;
  width: 100vw;
  background-position: center;
  margin: 0 auto;
  position: absolute;
  z-index: -1;

  & img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export default Background;