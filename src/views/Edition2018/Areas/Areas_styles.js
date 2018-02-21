import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 32px;
`;

export const Tile = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-gap: 64px;
  background-color: #fff;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    grid-gap: 24px;
  }
`;

export const Image = styled.div`
  width: 320px;
  height: 100%;
  background: url('${props => props.src}') no-repeat center/contain;

  @media (max-width: 960px) {
    width: 100%;
    height: 200px;
  }
`;

export const Data = styled.div`
  line-height: 1.4;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

