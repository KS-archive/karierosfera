import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0;
  background-color: ${colorPalette.accent1Color};
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
`;

export const Content = styled.p`
  font-size: 18px;
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
  justify-content: center;
  width: 800px;
  height: 60px;
  margin: 60px auto 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
  ${media.md`
    width: 600px;
  `}
  ${media.sm`
    width: 470px;
  `}
  ${media.xs`
    flex-direction: column;
    width: 90%;
    box-shadow: none;
  `}
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 600px;
  min-height: 60px;
  border: ${props => props.isError ? `1px solid ${colorPalette.primary2Color}` : 'none'};
  outline: none;
  padding: 0 15px;
  font-size: 18px;
  float: left;
  ${media.md`
    width: 400px;
  `}
  ${media.sm`
    width: 320px;
  `}
  ${media.xs`
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  `}
`;

export const Button = styled(RaisedButton)`
  > button {
    height: 60px !important;

    > div {
      height: 100% !important;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 200px;
        height: 100% !important;
        ${media.sm`
          min-width: 150px;
        `}

        &:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        span {
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
    }
  }
`;
