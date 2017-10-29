import React, { Component } from 'react';
import { tiles } from '../../../utils/content/partnerzy';
import { Container, TopLabel, BottomLabel, GridContainer, Cell, LabelRow, ImageLabel, TextLabel, Description } from './GridSection_styles';

export default class GridSection extends Component {
  renderCell = (cellData, index) => (
    <Cell key={index}>
      <LabelRow>
        <ImageLabel background={cellData.image} />
        <TextLabel>{cellData.title}</TextLabel>
      </LabelRow>
      <Description>{cellData.description}</Description>
    </Cell>
  );

  render() {
    return (
      <Container>
        <TopLabel><b>Podejmij współpracę &nbsp; </b> przy organizacji tegorocznej edycji</TopLabel>
        <BottomLabel>Oto kilka powodów dla których warto</BottomLabel>
        <GridContainer>
          {tiles.map(this.renderCell)}
        </GridContainer>
      </Container>
    );
  }
}
