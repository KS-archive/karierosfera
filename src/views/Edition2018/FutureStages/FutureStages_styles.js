import styled from 'styled-components';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  background-size: border-box;
  padding: 90px 0;
`;

export const Subtitle = styled.p`
  margin-top: -20px;
  margin-bottom: 60px;
  font-size: 18px;
  line-height: 1.4;
  color: ${colorPalette.textColor};
  ${media.xs`
    padding: 0 25px;
  `}
`;

export const StagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Stage = styled.div`
  position: relative;
  top: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 40px 40px 0 0;

  &:last-child {
    margin-right: 0;
    ${media.xs`
      margin-right: auto;
    `}
  }

  ${media.md`
    width: 280px;
    margin: 60px 60px 0 0;
  `}
  ${media.sm`
    width: 40%;
    margin: 40px 40px 0 0;
  `}
  ${media.xs`
    width: 80%;
    margin: 40px auto 0;
  `}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  transition: all 0.3s;
`;

export const Icon = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  background: url("${props => props.reverseIconSrc}") no-repeat center/contain;

  &::before {
    z-index: 1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("${props => props.iconSrc}") no-repeat center/contain;
    background-color: #f9f9f9;
    opacity: 1;
    transition: all 0.3s;
  }

  ${IconWrapper}:hover & {
    &::before {
      opacity: 0;
    }
  }
`;

export const Name = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  line-height: 1.3;
  color: ${colorPalette.textColor};
`;

export const Content = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  line-height: 1.4;
  color: ${colorPalette.accent1Color};
`;
