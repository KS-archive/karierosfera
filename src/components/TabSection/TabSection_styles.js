import styled from 'styled-components';
import { colorPalette } from '../../utils/constants/styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Tab = styled.div`
  font-size: 48px;
  color: #fff;
  font-weight: 500;
  padding: 16px 32px 16px 24px;
  background-color: ${colorPalette.primary1Color};
`;

export const Line = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${colorPalette.primary1Color};
`;

export const Wrapper = styled.div`
  padding: 48px;
  margin-bottom: 90px;
  background-color: #f7f7f7;
  width: 100%;
  box-sizing: border-box;
`;

