import styled from 'styled-components';
import { colorPalette, media } from '../../utils/constants/styles';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100px;
  padding: 15px 30px;
  background-color: ${colorPalette.textColor};
  ${media.xs`
    flex-direction: column-reverse;
    height: unset;
  `}
`;

export const Copyrights = styled.div`
  font-size: 14px;
  line-height: 1.3;
  color: #fff;
  ${media.xs`
    margin-top: 10px;
    text-align: center;
  `}
`;

export const Logo = styled.img`
  margin-left: auto;
  max-height: 80px;
  width: auto;
  ${media.xs`
    margin-left: 0;
    max-height: 60px;
  `}
`;
