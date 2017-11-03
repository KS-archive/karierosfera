import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
  padding: 0 10%;
  color: #000;
  ${media.md`
    flex-direction: column;
  `};
`;

export const Contact = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  ${media.md`
    align-items: center;
  `};
`;

export const TopLabel = styled.div`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.3;
  ${media.md`
    text-align: center;
  `};
`;

export const BottomLabel = styled.div`
  width: 250px;
  font-size: 18px;
  line-height: 1.4;
  ${media.md`
    margin-bottom: 20px;
    text-align: center;
  `};
`;

export const ContactImage = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  border: 3px solid ${colorPalette.primary1Color};
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Label = styled.div`
  width: 100%;
  height: calc(100% - 199px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: ${colorPalette.primary1Color};
  color: #fff;
`;
