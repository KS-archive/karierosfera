import styled from 'styled-components';
import { colorPalette, media } from '../../utils/constants/styles';
import { Container } from '../../utils/constants/styledComponents';

export const Header = Container.extend`
  font-size: 20px;
  color: ${colorPalette.primary1Color};
  ${media.md`
    font-size: 30px;
  `}
`;
