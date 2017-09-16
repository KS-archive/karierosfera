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
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
`;

export const Content = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;

  br {
    line-height: 40px;
  }

  strong {
    font-weight: 700;
  }
`;

export const CallToAction = styled.h4`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  color: ${colorPalette.primary1Color};
`;
