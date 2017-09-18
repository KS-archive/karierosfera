import styled from 'styled-components';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  box-sizing: border-box;
  margin-bottom: 90px;
  padding: 30px 40px;
  background-color: ${colorPalette.accent2Color};
  ${media.sm`
    padding: 60px 30px;
  `}
  ${media.sm`
    padding: 60px 20px;
  `}
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 60px;
  text-align: justify;
  color: ${colorPalette.textColor};
  ${media.md`
    padding-right: 30px;
  `}
  ${media.sm`
    min-width: 100%;
    padding-right: 0;
  `}
`;

export const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 165px;
  height: 60px;
`;

export const Image = styled.img`
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;
  cursor: pointer;
  ${media.sm`
    display: none;
  `}

  &:last-child {
    min-width: 115px;
    max-width: 115px;
    min-height: 115px;
    max-height: 115px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 36px;
  text-align: left;
  font-weight: 500;
`;

export const Content = styled.p`
  font-size: 18px;
  text-align: left;
  font-weight: 400;
  line-height: 1.4;

  strong {
    font-weight: 700;
  }

  br {
    line-height: 40px;
  }
`;

export const Form = styled.div`
  box-sizing: border-box;
  display: flex;
  min-height: 60px;
  margin-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
  ${media.xs`
    flex-direction: column;
    box-shadow: none;
  `}
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: calc(100% - 300px);
  height: 60px;
  border: ${props => props.isError ? `1px solid ${colorPalette.primary2Color}` : 'none'};
  outline: none;
  padding-left: 15px;
  font-size: 18px;
  ${media.md`
    width: calc(100% - 250px);
  `}
  ${media.sm`
    width: calc(100% - 200px);
  `}
  ${media.xs`
    width: 100%;
    margin-bottom: 20px;
    padding-left: 0;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
    text-align: center;
  `}
`;

export const Button = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  padding: 0 20px;
  background-color: ${colorPalette.primary1Color};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #fff;
  transition: all 0.3s;
  ${media.md`
    width: 250px;
  `}
  ${media.sm`
    width: 200px;
  `}
  ${media.xs`
    width: 100%;
  `}

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
  }
`;
