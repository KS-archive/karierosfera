import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media, colorPalette } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0 0;
  color: ${colorPalette.accent1Color};
  ${media.xs`
    padding: 60px 0 0;
  `}
`;

export const Title = styled.div`
  width: 800px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  ${media.md`
    width: 95%;
  `}
  ${media.xs`
    position: relative;
    left: -5px;
    width: 90%;
  `}
`;

export const Content = styled.div`
  width: 800px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 400;
  ${media.md`
    width: 95%;
  `}
`;

export const ContactElements = styled.div`
  width: 800px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  ${media.md`
    width: 95%;
  `}
  ${media.sm`
    width: 90%;
  `}
`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  margin-right: 60px;
  ${media.sm`
    margin-right: 0;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  `}
  ${media.xs`
    position: relative;
    left: -10px;
  `}

  &:last-child {
    margin-right: 0;
  }
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 15px;
  ${media.xs`
    width: 60px;
    height: 60px;
  `}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
`;

export const Email = styled.a`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  transition: all 0.2s;
  ${media.xs`
    font-size: 16px;
  `}

  &:hover {
    cursor: pointer;
    color: ${colorPalette.primary1Color};
  }
`;
