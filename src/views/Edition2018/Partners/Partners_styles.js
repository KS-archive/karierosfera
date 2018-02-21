import styled from 'styled-components';
import { colorPalette } from '../../../utils/constants/styles';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 45px;
  width: 100%;
  position: relative;
`;

export const Line = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  top: calc(50% - 1px);
  bottom: calc(50% - 1px);
  height: 2px;
  background-color: ${colorPalette.primary1Color};
`;

export const HeaderText = styled.div`
  position: relative;
  z-index: 1;
  font-size: 24px;
  font-weight: 500;
  color: ${colorPalette.textColor};
  padding: 0 16px;
  background-color: #f7f7f7;
  text-align: center;

  @media (max-width: 580px) {
    font-size: 18px;
  }

  @media (max-width: 4000px) {
    font-size: 16px;
  }
`;

export const Partners1 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;
  padding: 16px 0;

  img {
    max-width: 100%;
  }

  @media (max-width: 960px) {
    grid-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 740px) {
    grid-gap: 24px;
  }
`;

export const Partners2 = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 80px;
  justify-items: start;
  padding: 16px 0;
  line-height: 1.4;

  img {
    max-width: 100%;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 300px 1fr;
    grid-gap: 40px;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 32px;

    img {
      max-width: 400px;

      @media (max-width: 1200px) {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 580px) {
    div {
      text-align: center;
    }
  }
`;

export const Partners3 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  justify-items: center;
  padding: 16px 0;

  img {
    max-width: 100%;
  }

  @media (max-width: 960px) {
    grid-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 740px) {
    grid-gap: 24px;
  }
`;

export const Partners4 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 32px;
  justify-items: center;
  padding: 16px 0;

  img {
    max-width: 100%;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }
`;

export const Partners5 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 32px;
  justify-items: center;
  padding: 16px 0;

  img {
    max-width: 100%;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }
`;

