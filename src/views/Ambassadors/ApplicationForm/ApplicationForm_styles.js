import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin-top: 150px;
  border-top: 3px solid ${colorPalette.accent1Color};
  border-bottom: 3px solid ${colorPalette.primary1Color};
  background-color: #f5f5f5;
  ${media.xs`
    padding: 0 10px;
  `}
`;

export const Title = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 40px;
  border-radius: 0 35px 0 0;
  background-color: ${colorPalette.accent1Color};
  font-size: 28px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
  color: #fff;
  ${media.xs`
    top: -48px;
    right: 0;
    height: unset;
    padding: 10px 20px;
    border-radius: 0;
    font-size: 24px;
  `}
`;

export const Wrapper = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 60px auto;
  padding: 30px 60px 60px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 10px, rgba(0, 0, 0, 0.23) 0 3px 10px;
  ${media.sm`
    flex-direction: column;
    justify-content: center;
  `}
  ${media.xs`
    padding: 20px 30px 50px;
  `}
`;

export const StyledTextField = styled(TextField)`
  width: ${props => props.fullWidth ? '100%' : '46%'} !important;
  ${media.sm`
    width: 100% !important;
  `}
`;

export const StyledCheckbox = styled(Checkbox)`
  margin-top: 37px;
  width: ${props => props.fullWidth ? '100%' : '46%'} !important;
  ${media.sm`
    width: 100% !important;
  `}
`;

export const CheckboxError = styled.div`
  margin-left: 40px;
  font-size: 14px;
  font-weight: 700;
  color: ${colorPalette.primary2Color};
`;

export const Button = styled(RaisedButton)`
  margin: 30px 0 0 auto;
  ${media.xs`
    margin: 30px 0 0 0;
  `}

  > button > div > div {
    min-width: 220px !important;

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
`;
