import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 40px;
  border: 1px solid black;
  background-color: black;
  color: white;
  width: 100%;
`;

export const TopLabel = styled.div`
  width: 100%;
  justify-content: left;
`;

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
`;

export const Cell = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CellNumberLabel = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  justify-content: center;
`;

export const CellDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  font-size: 14px;
`;
