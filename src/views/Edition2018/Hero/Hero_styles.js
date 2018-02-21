import styled from 'styled-components';
import { colorPalette } from '../../../utils/constants/styles';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 513px;
  background-color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.src}) no-repeat center/cover;
    opacity: 0.2;
  }

  @media (max-width: 640px) {
    height: 400px;
  }

  @media (max-width: 440px) {
    height: 240px;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: 64px;
  text-align: center;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    font-size: 48px;
  }

  @media (max-width: 440px) {
    font-size: 36px;
  }
`;

export const TitleColor = styled.div`
  color: ${colorPalette.primary1Color};
  font-size: 80px;

  @media (max-width: 640px) {
    font-size: 64px;
  }

  @media (max-width: 440px) {
    font-size: 46px;
  }
`;

