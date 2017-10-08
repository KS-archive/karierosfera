import styled from 'styled-components';
import { Container } from '../../utils/constants/styledComponents';
import { colorPalette, media } from '../../utils/constants/styles';

export const StyledContainer = Container.extend`
  margin-top: 90px;
  margin-bottom: 90px;
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
