import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import { appBarHeight } from '../../utils/constants/styles';

export const StyledAppBar = styled(AppBar)`
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  height: ${appBarHeight}px;
  background-color: #000 !important;

  > div:first-child {
    display: flex;
    align-items: center;
    min-height: ${appBarHeight}px;

    > img {
      height: ${appBarHeight - 15}px;
      cursor: pointer;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    min-height: ${appBarHeight}px;
    margin-top: 0 !important;
  }
`;

export const Filler = styled.div`
  width: 100vw;
  height: ${appBarHeight}px;
`;
