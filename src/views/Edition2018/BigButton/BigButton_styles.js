import styled from 'styled-components';
import { colorPalette } from '../../../utils/constants/styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: 1.4;
  margin-bottom: 64px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BoldText = Text.extend`
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Button = styled.a`
  height: 180px;
  width: 90%;
  background-color: ${colorPalette.primary1Color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  color: #fff;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    cursor: pointer;
    background-color: ${colorPalette.primary2Color};
  }

  @media (max-width: 480px) {
    font-size: 28px;
    height: 100px;
  }
`;

