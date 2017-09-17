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
  background-color: #f5f5f5;
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
  flex-direction: column;
  margin: 0 auto;
  padding: 60px 0;
`;

export const Collapsible = styled.div`
  width: 100%;
  margin-bottom: 15px;
  ${media.xs`
    width: 95%;
    margin: 0 auto 15px;
  `}
`;

export const Question = styled.div`
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 30px;
  background-color: ${props => props.open ? colorPalette.primary1Color : colorPalette.accent1Color};
  font-size: 18px;
  line-height: 1.3;
  font-weight: 400;
  color: #fff;
`;

export const Answer = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  box-sizing: border-box;
  border: 1px solid ${colorPalette.primary1Color};
  padding: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: ${colorPalette.accent1Color};

  div {
    padding: 2px 0;
  }
`;
