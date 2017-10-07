import React, { Component } from 'react';
import { Container, TopLabel, GridContainer, Cell, CellNumberLabel, CellDescription} from './LastEditionSection_styles';

export default class ContactSection extends Component {

  render() {
    return (
      <Container>
        <TopLabel>Poprzednia edycja w liczbach</TopLabel>
        <GridContainer>
          <Cell>
            <CellNumberLabel><b>105 830</b></CellNumberLabel>
            <CellDescription>odsłon na stronie www.karierosfera.pl</CellDescription>
          </Cell>
          <Cell style={{ borderLeft: '2px solid #EB9741', borderRight: '2px solid #EB9741'}}>
            <CellNumberLabel><b>62 886</b></CellNumberLabel>
            <CellDescription>organiczny zasięg posta wideo</CellDescription>
          </Cell>
          <Cell>
            <CellNumberLabel><b>33 507</b></CellNumberLabel>
            <CellDescription>wejść na stronę www.karierosfera.pl</CellDescription>
          </Cell>
        </GridContainer>
        <GridContainer>
          <Cell>
            <CellNumberLabel><b>24 745</b></CellNumberLabel>
            <CellDescription>maili wysłanych do uczestników</CellDescription>
          </Cell>
          <Cell style={{ borderLeft: '2px solid #EB9741', borderRight: '2px solid #EB9741'}}>
            <CellNumberLabel><b>8 895</b></CellNumberLabel>
            <CellDescription>polubień profilu na Facebooku</CellDescription>
          </Cell>
          <Cell>
            <CellNumberLabel><b>370</b></CellNumberLabel>
            <CellDescription>miejscowości w zasięgu promocji</CellDescription>
          </Cell>
        </GridContainer>
      </Container>
    );
  }
}
