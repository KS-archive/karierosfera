import styled from 'styled-components';
import { media } from '../../utils/constants/styles';

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  ${media.lg`
    width: 900px;
  `}
  ${media.md`
    width: 680px;
  `}
  ${media.sm`
    width: 90%;
  `}
`;
