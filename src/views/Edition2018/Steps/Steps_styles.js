import styled from 'styled-components';
import { colorPalette } from '../../../utils/constants/styles';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-gap: 40px;
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 72px;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Number = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: ${colorPalette.primary1Color};
  margin-bottom: 8px;
`;

export const Icon = styled.div`
  height: 150px;
  width: 100%;
  background: url('${props => props.src}') no-repeat center/contain;
  margin-bottom: 16px;
`;

export const Dates = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${colorPalette.primary1Color};
  margin-bottom: 8px;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;

  span {
    font-weight: 700;
  }

  @media (max-width: 1200px) {
    font-size: 17px;
  }

  @media (max-width: 960px) {
    font-size: 15px;
  }

  @media (max-width: 740px) {
    font-size: 18px;
  }
`;

