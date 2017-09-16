import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { programTiles } from '../../../utils/content/ambasadorzy';
import { Container, Wrapper, Title, ProgramTiles, Tile, Content } from './AmbassadorsProgram_styles';

export default class AmbassadorsProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }

  renderTile = (tile, index) => {
    const { name, icon } = tile;
    const src = (this.state.active === index)
      ? `${icon.split('.')[0]} pomarańcz.${icon.split('.')[1]}`
      : icon;
    return (
      <Tile
        key={index}
        src={src}
        alt={`${name} - ikona`}
        onClick={() => { this.setState({ active: index }); }}
      />
    );
  }

  render() {
    return (
      <Container background="/img/dla_ambasadorow/888.jpg">
        <Title>Program Ambasadorski 2018</Title>
        <Wrapper>
          <ProgramTiles>
            {programTiles.map((tile, index) => this.renderTile(tile, index))}
          </ProgramTiles>
          <Content>
            {ReactHtmlParser(programTiles[this.state.active].content)}
          </Content>
        </Wrapper>
      </Container>
    );
  }
}
