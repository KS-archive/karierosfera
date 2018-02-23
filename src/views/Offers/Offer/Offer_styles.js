import styled from 'styled-components';
import { RaisedButton } from 'material-ui';
import { colorPalette, media } from '../../../utils/constants/styles';
import { Title } from '../../../utils/constants/styledComponents';
import Sidebar from './Sidebar/Sidebar';

export const Button = styled(RaisedButton)`
  > a {
    background-color: ${colorPalette.accent1Color} !important;
  }
  > a > div > div {
    min-width: 150px !important;
    ${media.xs`
      min-width: 0 !important;
    `}
    &:hover {
      background-color: ${colorPalette.accent1Color} !important;
    }

    span {
      color: #fff !important;
      box-sizing: border-box;
      padding: 0 24px !important;
      font-size: 16px !important;
      letter-spacing: 0.03em;
      ${media.xs`
        padding: 0 !important;
        font-size: 14px !important;
      `}
    }
  }
`;

export const OfferContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 60px 30px;
  padding-bottom: 80px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  ${media.xs`
    padding: 60px 3%;
    box-sizing: border-box;
  `}
`;

export const StyledTitle = styled(Title)`
  text-transform: uppercase;
`;

export const StyledSidebar = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  width: 18%;
  padding: 2.5%;
  margin-top: 86px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 6px, rgba(0, 0, 0, 0.23) 2px 2px 6px;
  margin-bottom: 20px;
  ${media.xs`
    width: 100%;
    margin-top: 0;
    margin-bottom: 60px;
    padding-top: 25px;
    padding-bottom: 25px; 
  `}
`;

export const OffersListContainer = styled.div`
  width: 74%;
  margin-left: 3%;
  ${media.xs`
    width: 100%;
    margin-left: 0;
  `}
`;

export const ItemList = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  width: 100%;
  background-color: #fff;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 6px, rgba(0, 0, 0, 0.23) 2px 2px 6px;
  display: flex;
  align-items: center;
  ${media.xs`
    box-sizing: border-box;
    padding: 15px;
  `}
`;

export const ItemImage = styled.div`
  max-width: 100px;
  min-width: 100px;
  max-height: 100px;
  flex-grow: 1;
  > img {
    width: 100%;
  }
`;

export const ItemText = styled.div`
  flex-grow: 2;
  padding: 0 20px;
  min-width: 80px;
  ${media.xs`
    flex-grow: 1;
  `}
  > p {
    font-weight: 500;
    margin-bottom: 10px;
  }
  > p:last-child {
    color: #757575;
    font-weight: 100;
    margin-bottom: 0;
  }
`;

export const ItemLink = styled.div`
  color: #fff !important;
  text-transform: uppercase;
`;

