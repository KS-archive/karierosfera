import styled from 'styled-components';
import { RaisedButton, GridTile } from 'material-ui';
import { colorPalette, media } from '../../../../utils/constants/styles';

export const Button = styled(RaisedButton)`
  margin-top: 30px;
  ${media.xs`
    margin-top: 15px;
  `}
  > a {
    background-color: ${colorPalette.primary1Color} !important;
  }
  > a > div > div {
    min-width: 150px !important;
    ${media.xs`
      min-width: 150px !important;
    `}
    &:hover {
      background-color: ${colorPalette.primary1Color} !important;
    }
    span {
      color: #fff !important;
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

export const StyledGridTile = styled(GridTile)`
  border: 1px solid ${colorPalette.accent1Color};
  text-align: center;
  > img {
    transform: none !important;
    top: 0 !important;
    left: 0 !important;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 0 20px;
`;
