import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Title = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  ${media.sm`
    text-align: center;
  `}
`;

export const Subtitle = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
  color: #bbb;
`;

export const Email = styled.a`
  margin-bottom: 35px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  color: ${colorPalette.primary1Color};
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${colorPalette.primary2Color};
  }
`;

export const CoordynatorsList = styled.div`
  position: relative;
  top: -40px;
  left: 86px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
  ${media.lg`
    left: 34px;
  `}
  ${media.md`
    left: 24px;
  `}
  ${media.sm`
    left: 20px;
    text-align: center;
  `}
  ${media.xs`
    left: 0;
  `}
`;

export const Coordinator = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  min-height: 83px;
  margin-top: 40px;
  ${media.lg`
    width: 350px;
    margin-right: 30px;
  `}
  ${media.md`
    align-items: flex-start;
    width: 300px;
  `}
  ${media.sm`
    align-items: flex-start;
    width: 200px;
    margin-right: 50px;
  `}
  ${media.xs`
    justify-content: center;
    width: 95%;
    margin-right: 0;
  `}
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;
  ${media.md`
    position: relative;
    top: -2px;
    width: 60px;
    height: 60px;
    margin-right: 10px;
  `}
  ${media.sm`
    display: none;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
`;

export const Area = styled.p`
  font-size: 18px;
  font-weight: 500;
  ${media.sm`
    font-size: 17px;
  `}
`;

export const Name = styled.p`
  font-weight: 400;
`;

export const Phone = styled.p`
  font-weight: 400;
`;

export const Mail = styled.a`
  display: block;
  margin-top: auto;
  color: ${colorPalette.primary1Color};
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${colorPalette.primary2Color};
  }
`;
