import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { media } from '../../../utils/constants/styles';

export const Container = styled.div`
  position: relative;
  width: 100%;

  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: -3px;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("${props => props.background}") no-repeat center/cover;
    opacity: 0.6;
  }
`;

export const StyledContainer = MainContainer.extend`
  overflow-y: hidden;
  display: flex;
  position: relative;
  top: -3px;
  ${media.sm`
    flex-direction: column-reverse;
    align-items: center;
  `}
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;
  ${media.md`
    margin-right: 30px;
  `}
  ${media.sm`
    flex-flow: row wrap;
    margin-right: 0;
  `}
  ${media.xs`
    width: 100%;
  `}
`;

// Styles copied from HeroCarousel
export const Button = styled(RaisedButton)`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.sm`
    margin-right: 35px;

    &:nth-child(even) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  `}
  ${media.xs`
    min-width: 80% !important;
    margin: 0 0 30px;
  `}

  > button > div > div {
    min-width: 260px !important;
    ${media.md`
      min-width: 220px !important;
    `}
    ${media.xs`
      min-width: 80% !important;
    `}

    &:hover {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }

    span {
      box-sizing: border-box;
      font-size: 16px !important;
      letter-spacing: 0.03em;
      ${media.md`
        padding: 0 12px !important;
        font-size: 15px !important;
      `}
    }
  }
`;

export const Content = styled.div`
  position: relative;
  top: -30px;
  box-sizing: border-box;
  padding: 90px 60px 60px;
  background-color: rgba(255, 255, 255, 0.7);
  ${media.md`
    padding: 90px 40px 60px;
  `}
`;

export const Header = styled.h1`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Subheader = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
`;

export const List = styled.ul`
  list-style-image: url("${props => props.pointSrc}");
`;

export const Listitem = styled.li`
  margin-bottom: 15px;
  padding-left: 5px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  text-transform: uppercase;
`;
