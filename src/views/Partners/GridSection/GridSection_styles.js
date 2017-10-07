import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-top: 60px;
  flex-direction: column;
  color: black;
  margin-bottom: 40px;
  justify-content: center;
`;

export const TopLabel = styled.div`
  display: flex;
  padding: 20px;
  justify-content: left;
  width: 75%;
`;

export const BottomLabel = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: left;
  width: 75%;
`;

export const GridContainer = styled.div`
  width: 80%;
  display: flex;
`;

export const Cell = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 4px ${colorPalette.primary1Color} solid;
  margin: 20px;
  padding: 20px;
  background-color: white;
`;


export const LabelRow = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 20px 0;
`;

export const ImageLabel = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  background: url(" ${props => props.background}") no-repeat center/contain;
`;

export const TextLabel = styled.div`
  width: 50%;
  display: flex;
  font-weight: bold;
  margin: 0 20px;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  text-align: justify;
  text-justify: auto;
  font-size: 14px;
`;


export const Legend = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;


export const LegendEtap = styled.div`
  width: 100%;
  justify-content: center;
`;


export const LegendLabel = styled.div`
  width: 100%;
  justify-content: center;
`;


export const LegendDescription = styled.div`
  width: 50px;
  height: 20px;
  background-color: ${props => props.color};
`;

