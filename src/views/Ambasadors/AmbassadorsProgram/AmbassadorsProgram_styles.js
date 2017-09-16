import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin-top: 150px;
  border-top: 3px solid ${colorPalette.accent1Color};
  border-bottom: 3px solid ${colorPalette.primary1Color};
  background-color: rgba(255, 255, 255, 0.6);

  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("${props => props.background}") no-repeat center/cover;
    opacity: 0.3;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 40px;
  border-radius: 0 35px 0 0;
  background-color: ${colorPalette.accent1Color};
  font-size: 28px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
  color: #fff;
  ${media.xs`
    top: -48px;
    right: 0;
    height: unset;
    padding: 10px 20px;
    border-radius: 0;
    font-size: 24px;
  `}
`;

export const Wrapper = MainContainer.extend`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  ${media.sm`
    flex-direction: row;
  `}
  ${media.xs`
    flex-direction: column;
  `}
`;

export const ProgramTiles = styled.div`
  display: flex;
  ${media.sm`
    flex-direction: column;
  `}
  ${media.xs`
    flex-flow: row wrap;
    justify-content: center;
  `}
`;

export const Tile = styled.img`
  width: 265px;
  height: 265px;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  ${media.lg`
    width: 200px;
    height: 200px;
  `}
  ${media.md`
    width: 150px;
    height: 150px;
    margin-right: 20px;
  `}
  ${media.sm`
    margin-right: 0;
  `}
  ${media.xs`
    width: 180px;
    height: 180px;
  `}

  @media (max-width: 450px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 390px) {
    width: 130px;
    height: 130px;
  }
`;

export const Content = styled.p`
  box-sizing: border-box;
  padding: 60px 40px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  text-align: justify;
  color: ${colorPalette.accent1Color};
  ${media.md`
    padding: 50px 40px;
    font-size: 18px;
  `}
  ${media.xs`
    padding: 20px 15px;
    font-size: 16px;
  `}

  br {
    line-height: 30px;
  }

  strong {
    font-weight: 700;
  }
`;
