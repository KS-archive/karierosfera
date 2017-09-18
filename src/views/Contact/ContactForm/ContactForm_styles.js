import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { colorPalette, media } from '../../../utils/constants/styles';

export const Container = MainContainer.extend`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
  color: #bbb;
  ${media.sm`
    padding: 0 15px;
    text-align: center;
  `}
`;

export const Form = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px auto 90px;
  padding: 30px 60px 40px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 10px, rgba(0, 0, 0, 0.23) 0 3px 10px;
  ${media.sm`
    width: 100%;
    margin: 30px 0 90px;
    padding: 30px 40px 40px;
    flex-direction: column;
    justify-content: center;
  `}
  ${media.xs`
    width: 95%;
    margin: 30px auto 90px;
    padding: 20px 30px 50px;
  `}
`;

export const StyledTextField = styled(TextField)`
  width: ${props => props.fullWidth ? '100%' : '46%'} !important;
  ${media.sm`
    width: 100% !important;
  `}
`;

export const Button = styled(RaisedButton)`
  margin: 40px 0 0 auto;
  ${media.xs`
    width: 100% !important;
    margin: 40px 0 0 0;
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
