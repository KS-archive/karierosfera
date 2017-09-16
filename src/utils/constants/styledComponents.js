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
  ${media.xs`
    width: 100%;
  `}
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
  ${media.xs`
    padding: 0 20px;
  `}
`;
