import styled from 'styled-components';
import { colorPalette } from '../../../utils/constants/styles';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  justify-items: center;
  padding: 96px 0;

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    padding: 56px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Num = styled.div`
  font-size: 85px;
  font-weight: 700;
  color: ${colorPalette.primary1Color};
  margin-bottom: 16px;

  @media (max-width: 580px) {
    font-size: 64px;
  }
`;

export const Val = styled.div`
  font-size: 32px;
  color: ${colorPalette.textColor};
  text-transform: uppercase;
  font-weight: 500;

  @media (max-width: 960px) {
    font-size: 28px;
  }

  @media (max-width: 580px) {
    font-size: 22px;
  }
`;

