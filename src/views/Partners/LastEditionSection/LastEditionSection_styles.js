import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px 10px;
  background-color: ${colorPalette.textColor};
  color: white;
  width: 100%;
`;

export const TopLabel = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  ${media.md`
    text-align: center;
  `};
`;

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const Cell = styled.div`
  box-sizing: border-box;
  position: relative;
  top: -40px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  padding: 0 15px;
  text-align: center;

  &:nth-child(3n - 1) {
    border-left: 3px solid ${colorPalette.primary1Color};
    border-right: 3px solid ${colorPalette.primary1Color};
  }

  ${media.sm`
    width: 50%;
    border: none !important;

    &:nth-child(even) {
      border-left: 3px solid ${colorPalette.primary1Color} !important;
    }
  `};
  ${media.xs`
    top: -20px;
    width: 100%;
    margin-top: 20px;

    &:nth-child(even) {
      border: none !important;
    }
  `};
`;

export const CellNumberLabel = styled.div`
  width: 100%;
  padding: 10px 0;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`;

export const CellDescription = styled.div`
  width: 100%;
  padding-bottom: 10px;
  font-size: 16px;
  line-height: 1.4;
`;
