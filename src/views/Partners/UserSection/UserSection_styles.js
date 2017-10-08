import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  width: 90%;
  border: 3px solid ${colorPalette.accent2Color};
  box-sizing: border-box;
  align-items: center;
  margin-top: 40px;
`;

export const TopLabel = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: ${colorPalette.accent2Color};
  color: black;
  padding: 20px 0 20px 20px;
`;

export const UserImage = styled.div`
  width: 100%;
  justify-content: left;
  background: url('img/sylwetka_uczestnika/uczestnik.svg') no-repeat center/contain;
  height: 550px;
  background-color: white;
  ${media.sm`
    background: url('img/sylwetka_uczestnika/uczestnik-mobile.svg') no-repeat center/contain;
  `};
`;
