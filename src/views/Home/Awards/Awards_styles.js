import styled from 'styled-components';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  background-color: ${colorPalette.accent2Color};
  ${media.sm`
    padding: 60px 30px;
  `}
  ${media.sm`
    padding: 60px 20px;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 60px 60px 0;
  text-align: justify;
  color: ${colorPalette.textColor};
  ${media.md`
    padding-right: 20px;
  `}
  ${media.sm`
    padding-right: 0;
  `}
`;

export const Image = styled.img`
  min-width: 240px;
  max-width: 240px;
  ${media.sm`
    display: none;
  `}
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: 500;
`;

export const Content = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;

  strong {
    font-weight: 700;
  }

  br {
    line-height: 40px;
  }
`;
