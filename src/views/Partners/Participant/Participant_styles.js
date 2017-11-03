import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px ${colorPalette.accent2Color} solid;
  margin-top: 60px;
  background-color: #fff;
  ${media.sm`
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  `};
`;

export const Header = styled.div`
  box-sizing: border-box;
  background-color: ${colorPalette.accent2Color};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  color: ${colorPalette.textColor};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.3;
  color: ${colorPalette.textColor};
`;

export const ImageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Image = styled.img`
  box-sizing: border-box;
  width: 100%;
  padding: 30px 60px;
`;
