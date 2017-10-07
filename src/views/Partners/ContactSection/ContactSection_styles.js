import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-top: 60px;
  color: black;
  justify-content: center;
  margin: 60px 0;
  width: 70%;
  margin-left: 15%;
`;

export const Contact = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ContactImage = styled.div`
  width: 50%;
  display: flex;
  border: 3px solid ${colorPalette.primary1Color};
  flex-direction: column;
  background-color: white;
`;

export const TopLabel = styled.div`
  width: 250px;
  display: flex;
  margin: 20px 0;
`;

export const BottomLabel = styled.div`
  width: 250px;
  display: flex;
  font-size: 14px;
`;

export const Image = styled.div`
  display: flex;
  font-size: 14px;
  background: url(" ${props => props.background}") no-repeat center/contain;
  width: 100%;
  height: 70px;
  margin: 40px 0;
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  background-color: ${colorPalette.primary1Color};
  padding: 20px 0;
  color: white;
  justify-content: center;
`;
