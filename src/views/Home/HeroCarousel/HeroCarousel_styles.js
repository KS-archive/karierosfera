import styled from 'styled-components';
import Slider from 'react-slick';
import RaisedButton from 'material-ui/RaisedButton';
import { appBarHeight, media } from '../../../utils/constants/styles';

export const StyledSlider = styled(Slider)`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: calc(100vh - ${appBarHeight}px) !important;

  ul {
    position: absolute;
    bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    li {
      position: relative;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin: 0 7px;
      border-radius: 100%;
      padding: 0;
      cursor: pointer;
      background-color: #fff;
      opacity: 0.5;

      &.slick-active {
        opacity: 0.8;
      }

      button {
        opacity: 0;
      }
    }
  }
`;

export const Item = styled.div`
  z-index: -1;
  position: relative;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - ${appBarHeight}px) !important;
  background-color: #000;

  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${props => props.backgroundSrc}) no-repeat center/cover;
    opacity: 0.5;
  }
`;

export const Header = styled.h1`
  margin-bottom: 30px;
  padding: 0 30px;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #fff;
  ${media.xs`
    font-size: 32px;
    padding: 0 15px;
  `}
`;

export const Button = styled(RaisedButton)`
  > button > div > div {
    min-width: 220px !important;
    ${media.xs`
      min-width: 150px !important;
    `}

    &:hover {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }

    span {
      box-sizing: border-box;
      padding: 0 24px !important;
      font-size: 16px !important;
      letter-spacing: 0.03em;
      ${media.xs`
        padding: 0 16px !important;
        font-size: 14px !important;
      `}
    }
  }
`;
