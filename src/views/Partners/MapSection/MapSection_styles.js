import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${colorPalette.accent2Color};
  height: 250px;
  margin-top: 120px;
  margin-bottom: 60px;
  padding: 30px;
  ${media.lg`
    height: 220px;
  `};
  ${media.md`
    justify-content: center;
    height: unset;
    margin-top: 90px;
    margin-bottom: 30px;
  `};
`;

export const Text = styled.div`
  width: 600px;
  color: ${colorPalette.textColor};
  ${media.lg`
    width: 500px;
  `};
  ${media.md`
    text-align: center;
  `};
`;

export const MapImg = styled.div`
  position: absolute;
  right: 0;
  width: 400px;
  height: 400px;
  background: url(" ${props => props.background}") no-repeat center/contain;
  ${media.lg`
    width: 300px;
    height: 300px;
  `};
  ${media.md`
    display: none;
  `};
`;

export const MajorLabel = styled.div`
  font-size: 28px;
  line-height: 1.3;
  font-weight: bold;
  margin-bottom: 15px;
  ${media.md`
    font-size: 24px;
  `};
`;

export const MinorLabel = styled.div`
  font-size: 16px;
  line-height: 1.4;
  font-weight: normal;
`;
