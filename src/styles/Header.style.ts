import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-color: #121213;
    z-index: -1;
  }

  & img {
    height: 10vh;
    margin: 2rem auto;
    padding: .7rem;
  }
`;

export default Header;