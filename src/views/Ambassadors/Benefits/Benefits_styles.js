import styled from 'styled-components';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin-top: 150px;
  border-top: 3px solid ${colorPalette.accent1Color};
  border-bottom: 3px solid ${colorPalette.primary1Color};
  background-color: rgba(255, 255, 255, 0.6);

  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("${props => props.background}") no-repeat center/cover;
    opacity: 0.3;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 40px;
  border-radius: 0 35px 0 0;
  background-color: ${colorPalette.accent1Color};
  font-size: 28px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
  color: #fff;
  ${media.xs`
    top: -48px;
    right: 0;
    height: unset;
    padding: 10px 20px;
    border-radius: 0;
    font-size: 24px;
  `}
`;

export const Wrapper = MainContainer.extend`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 60px 0;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
  margin-right: 30px;
  ${media.xs`
    margin-right: 15px;
  `}
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
  background: url("${props => props.icon}") no-repeat center/cover;
  ${media.xs`
    padding-left: 10px;
    width: 80px;
    height: 80px;
  `}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Profits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Profit = styled.div`
  margin-bottom: 20px;
  font-size: 23px;
  line-height: 1.4;
  font-weight: 400;
  color: ${colorPalette.accent1Color};
  ${media.md`
    font-size: 20px;
  `}
  ${media.sm`
    font-size: 18px;
  `}
  ${media.xs`
    margin-bottom: 15px;
    padding-right: 10px;
    font-size: 16px;
  `}

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    font-weight: 700;
  }
`;
