import styled from 'styled-components';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 120px 0;
`;

export const Title = styled.h2`
  box-sizing: border-box;
  margin-bottom: 30px;
  padding-left: 40px;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
  ${media.sm`
    padding-left: 15px;
  `}
  ${media.xs`
    padding: 0 20px;
  `}
`;

export const AreasList = styled.div`
  position: relative;
  top: -15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${media.xs`
    justify-content: flex-start;
  `}
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 15px 30px;
  ${media.lg`
    margin: 15px 40px;
  `}
  ${media.md`
    margin: 15px 20px;
  `}
  ${media.xs`
    flex-direction: row;
    width: 90%;
    margin: 15px;
  `}
`;

export const AreaIcon = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 15px;
  ${media.xs`
    margin-bottom: 0;
    margin-right: 20px;
  `}
`;

export const AreaName = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  text-transform: uppercase;
  color: ${colorPalette.textColor};
  ${media.xs`
    text-align: left;
  `}
`;
