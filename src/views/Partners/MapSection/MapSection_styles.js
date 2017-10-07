import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 1px ${colorPalette.accent2Color} solid;
  width: 80%;
  background-color: ${colorPalette.accent2Color};
  padding: 20px;
`;

export const TextMap = styled.div`
  width: 70%;
  color: black;
`;

export const Map = styled.div`
  width: 800px;
  height: 400px;
  position: relative;
  top: -100px;
  display: flex;
  background: url(" ${props => props.background}") no-repeat center/contain;
`;

export const MajorLabel = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
`;

export const MinorLabel = styled.div`
  font-weight: normal;
  font-size: 14px;
`;
