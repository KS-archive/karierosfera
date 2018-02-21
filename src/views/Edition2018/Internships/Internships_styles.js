import styled from 'styled-components';
import { colorPalette } from '../../../utils/constants/styles';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Content = styled.div`
  color: ${colorPalette.textColor};
  line-height: 1.4;
  background-color: #fff;
  padding: 16px;

  @media (max-width: 580px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const Tile = styled.div`
  border: 1px solid ${colorPalette.primary1Color};
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  padding: 24px;
  background-color: ${colorPalette.primary1Color};
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;

  @media (max-width: 960px) {
    font-size: 20px;
    padding: 16px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 580px) {
    font-size: 16px;
    height: 40px;
  }
`;

export const ImageWrapper = styled.div`
  padding: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 960px) {
    padding: 24px;
  }

  @media (max-width: 740px) {
    min-height: 200px;
  }

  @media (max-width: 580px) {
    min-height: 140px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 160px;
`;

export const Description = styled.div`
  border: 1px solid #ddd;
  padding: 24px;
  border-radius: 4px;
  line-height: 1.4;
  background-color: #fff;
  width: 500px;
  z-index: 10;
`;
