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
  background-color: white;
`;

export const Title = styled.div`
  box-sizing: border-box;
  background-color: ${colorPalette.primary1Color};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
  width: 100%;
`;

export const Companies = styled.div`
  align-items: center;
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  margin: 40px;
  background: url(" ${props => props.background}") no-repeat center/contain;
  width: 200px !important;
  height: 200px;
`;
