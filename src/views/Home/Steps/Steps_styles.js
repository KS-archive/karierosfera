import styled from 'styled-components';
import { colorPalette } from '../../../utils/constants/styles';

export const Container = styled.div`
  width: 100%;
  padding: 90px 0;
`;

export const Title = styled.h2`
  color: ${colorPalette.textColor};
  margin-bottom: 40px;
  padding: 0 15px;
  font-size: 36px;
  font-weight: 500;
`;

export const DesktopImage = styled.img`
  width: 100%;
  max-width: 900px;
`;

export const MobileImage = styled.img`
  width: 100%;
  max-width: 600px;
`;
