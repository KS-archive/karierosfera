import styled from 'styled-components';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 90px 0;
  ${media.lg`
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `}
`;

export const Stage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 320px;
  ${media.lg`
    flex-direction: row;
    width: 700px;
    padding-bottom: 90px;
  `}
  ${media.md`
    width: 600px;
  `}
  ${media.sm`
    width: 500px;
  `}
  ${media.xs`
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    padding: 0 30px 60px;
  `}

  &:last-child {
    padding-bottom: 0 !important;
  }
`;

export const Icon = styled.img`
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 30px;
  ${media.lg`
    margin: 0 60px 0 0;
  `}
  ${media.xs`
    margin: 0 0 30px 0;
  `}
`;

export const ContentWrapper = styled.div`
  color: ${colorPalette.textColor};
  line-height: 1.4;
  text-align: center;
  ${media.lg`
    text-align: left;
  `}
  ${media.xs`
    text-align: center;
  `}
`;

export const Title = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Content = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
