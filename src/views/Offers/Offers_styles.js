import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GridList, GridTile } from 'material-ui';
import { Title } from '../../utils/constants/styledComponents';
import { colorPalette, media } from '../../utils/constants/styles';

export const StyledTitle = styled(Title)`
  text-align: center;
  text-transform: uppercase;
`;

export const TownsContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 60px 30px;
  padding-bottom: 80px;
  ${media.xs`
    padding: 60px 0;
  `}
`;

export const StyledLink = styled(Link)`
  text-align: center;
  text-transform: uppercase;
`;

export const StyledGridTile = styled(GridTile)`
  border: 1px solid ${colorPalette.accent1Color};
  box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 6px, rgba(0, 0, 0, 0.23) 2px 2px 6px;
  &:hover {
    border: 1px solid ${colorPalette.primary1Color};
    > div:last-child {
      background-color: ${colorPalette.primary1Color} !important;
    }
  }
`;

export const StyledGridList = styled(GridList)`
  ${media.xs`
      padding: 0 30px;
      > div {
        width: 100% !important;
      }
  `}
`;
