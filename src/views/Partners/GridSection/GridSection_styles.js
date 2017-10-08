import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 40px;
  color: ${colorPalette.textColor};
`;

export const TopLabel = styled.div`
  align-self: flex-start;
  padding-bottom: 10px;
  font-size: 22px;
  line-height: 1.3;
  ${media.md`
    align-self: center;
    text-align: center;
    padding-left: 2%;
    padding-right: 2%;
  `};
`;

export const BottomLabel = styled.div`
  align-self: flex-start;
  padding-bottom: 40px;
  font-size: 22px;
  line-height: 1.3;
  ${media.md`
    align-self: center;
    text-align: center;
    padding-left: 2%;
    padding-right: 2%;
  `};
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Cell = styled.div`
  box-sizing: border-box;
  position: relative;
  top: -40px;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px ${colorPalette.primary1Color} solid;
  margin-top: 40px;
  padding: 30px;
  background-color: white;
  ${media.lg`
    width: 430px;
  `};
  ${media.md`
    width: 320px;
  `};
  ${media.sm`
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  `};
  ${media.xs`
    padding: 30 20px;
  `};
`;


export const LabelRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.md`
    flex-direction: column;
  `};
`;

export const ImageLabel = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  background: url(" ${props => props.background}") no-repeat center/contain;
`;

export const TextLabel = styled.div`
  position: relative;
  top: -7px;
  display: flex;
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  ${media.md`
    text-align: center;
  `};
  ${media.md`
    margin-bottom: 30px;
  `};
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  text-align: justify;
  text-justify: auto;
  font-size: 16px;
  line-height: 1.4;
`;
