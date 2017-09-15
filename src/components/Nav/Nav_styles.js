import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import { colorPalette, appBarHeight } from '../../utils/constants/styles';

export default styled(AppBar)`
  height: ${appBarHeight}px;
  background-color: ${colorPalette.textColor} !important;

  > div:first-child {
    display: flex;
    align-items: center;
    min-height: ${appBarHeight}px;

    > img {
      height: ${appBarHeight - 15}px;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    min-height: ${appBarHeight}px;
    margin-top: 0 !important;
  }
`;
