import styled from 'styled-components';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 90px 0;
`;

export const PartnersList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Partner = styled.div`
  box-sizing: border-box;
  position: relative;
  top: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  margin: 40px 40px 0 0;
  padding: 40px 60px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
  transition: all 0.3s;
  ${media.lg`
    width: 420px;
    padding: 40px;
  `}
  ${media.md`
    width: 320px;
    padding: 30px 20px;
  `}
  ${media.sm`
    width: 100%;
    margin: 40px 0 0 0;
    padding: 60px;
    text-align: center;
  `}
  ${media.xs`
    width: 95%;
    margin: 40px 0 0 2.5%;
    padding: 30px;
    text-align: center;
  `}

  &:nth-child(even) {
    margin-right: 0;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 10px, rgba(0, 0, 0, 0.23) 0 3px 10px;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 140px;
  margin-bottom: 20px;
  ${media.md`
    height: 120px;
  `}
  ${media.sm`
    height: 140px;
  `}
`;

export const Name = styled.h4`
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  color: ${colorPalette.textColor};
  ${media.md`
    font-size: 20px;
  `}
  ${media.sm`
    font-size: 24px;
  `}
`;

export const Area = styled.h5`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${colorPalette.accent3Color};
`;

export const Description = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: ${colorPalette.textColor};
  ${media.md`
    font-size: 15px;
    line-height: 1.4;
  `}
  ${media.sm`
    font-size: 17px;
  `}
`;
