import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px ${colorPalette.primary1Color} solid;
  margin: 60px 0;
  background-color: #fff;
  ${media.sm`
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  `};
`;

export const Title = styled.div`
  box-sizing: border-box;
  background-color: ${colorPalette.primary1Color};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 15px;
  font-size: 18px;
  text-align: center;
  line-height: 1.3;
  color: #fff;
`;

export const Companies = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 200px;
  padding: 30px;
`;
