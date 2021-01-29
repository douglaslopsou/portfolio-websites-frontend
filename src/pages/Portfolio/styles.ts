import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  align-items: flex-start;
  justify-content: center;
`;

export const Content = styled.div`
  h1 {
    color: #3a3a3a;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  h1 {
    margin-bottom: 24px;
  }

  form {
    width: 1440px;
    text-align: center;
    display: flex;

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-start;
  justify-content: space-between;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
