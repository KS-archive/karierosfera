import styled from 'styled-components';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 60px 0;
  color: #fff;
  background-color: ${colorPalette.textColor};
  ${media.sm`
    padding: 90px 20px;
  `}
`;

export const Title = styled.h2`
  box-sizing: border-box;
  margin-bottom: 20px;
  padding-left: 40px;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
  ${media.sm`
    padding-left: 0;
  `}
`;

export const Content = styled.p`
  box-sizing: border-box;
  margin-bottom: 20px;
  padding-left: 40px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  ${media.sm`
    padding-left: 0;
  `}

  br {
    line-height: 40px;
  }

  strong {
    font-weight: 700;
  }
`;

export const CallToAction = styled.h4`
  box-sizing: border-box;
  padding-left: 40px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  color: ${colorPalette.primary1Color};
  ${media.sm`
    padding-left: 0;
  `}
`;
