import { css } from 'styled-components';

export const colorPalette = {
  primary1Color: '#EB9741',
  primary2Color: '#FF9800',
  primary3Color: '#EE9942',
  accent1Color: '#333333',
  accent1ColorRGBA: 'rgba(51, 51, 51, 1)',
  accent2Color: '#F2F2F2',
  accent3Color: '#757575',
  textColor: '#212121',
  pickerHeaderColor: '#EB9741',
};

export const media = {
  xs: (...args) => css`
    @media (max-width: 540px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: 720px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: 960px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: 1600px) {
      ${css(...args)}
    }
  `,
  xxl: (...args) => css`
    @media (min-width: 1601px) {
      ${css(...args)}
    }
  `,
};

export const breakpoints = {
  xs: 540,
};

export const appBarHeight = 80;

export const inputStyle = {
  floatingLabelStyle: { color: colorPalette.accent3Color },
  floatingLabelFocusStyle: { fontWeight: 700, color: colorPalette.primary1Color },
  floatingLabelShrinkStyle: { fontWeight: 700, color: colorPalette.primary1Color },
  style: { fontWeight: 400 },
};
