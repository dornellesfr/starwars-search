import styled from 'styled-components';

const LoadingStyle = styled.div`
  & .loading {
    width: 40px;
    height: 40px;
    border: 5px solid white;
    border-color: white transparent transparent;
    border-radius: 50%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingStyle;
