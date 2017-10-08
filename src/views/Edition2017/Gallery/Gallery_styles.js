import styled from 'styled-components';
import Slider from 'react-slick';
import { Title } from '../../../utils/constants/styledComponents';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  position: relative;
  left: 15px;
  box-sizing: border-box;
  padding: 60px 30px;
  ${media.xs`
    padding: 60px 0;
  `}
`;

export const StyledTitle = Title.extend`
  position: relative;
  left: -30px;
  ${media.xs`
    left: -20px;
  `}
`;

export const StyledSlider = styled(Slider)`
  position: relative;
  margin-bottom: 40px;

  ul {
    position: absolute;
    bottom: -40px;
    margin-left: auto;
    margin-right: auto;
    left: -10px;
    right: 10px;

    li {
      position: relative;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin: 0 7px;
      border-radius: 100%;
      padding: 0;
      cursor: pointer;
      background-color: ${colorPalette.textColor};
      opacity: 0.3;

      &.slick-active {
        opacity: 0.7;
      }

      button {
        opacity: 0;
      }
    }
  }

  i {
    z-index: 1;
    position: absolute;
    top: 50%;
    bottom: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    font-size: 30px;
    color: ${colorPalette.accent3Color};

    &:first-of-type {
      left: -55px;
      ${media.xs`
        left: 0;
      `}
    }

    &:last-of-type {
      right: -28px;
      ${media.xs`
        right: 6%;
      `}
    }

    &:hover {
      cursor: pointer;
      transition: all 0.3s;
      transform: scale(1.1, 1.1);
      color: ${colorPalette.accent1Color};
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    margin-bottom: 20px;
  }
`;

const imageRatio = 0.666875;
const imageWidth = 340; // px
const imageWidthLg = 260; // px
const imageWidthMd = 285; // px
const imageWidthSm = 75; // vw
const imageWidthXs = 70; // vw

export const Image = styled.div`
  position: relative;
  width: 340px;
  height: ${imageWidth * imageRatio}px;
  background: url(${props => props.backgroundImg}) no-repeat center/cover;
  ${media.lg`
    width: ${imageWidthLg}px;
    height: ${imageWidthLg * imageRatio}px;
  `}
  ${media.md`
    width: ${imageWidthMd}px;
    height: ${imageWidthMd * imageRatio}px;
  `}
  ${media.sm`
    width: ${imageWidthSm}vw;
    height: ${imageWidthSm * imageRatio}vw;
    left: 1vw;
  `}
  ${media.xs`
    width: ${imageWidthXs}vw;
    height: ${imageWidthXs * imageRatio}vw;
    left: 11vw;
  `}
`;
