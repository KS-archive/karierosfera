import React, { Component } from 'react';
import { Button, Title, StyledGridTile } from './Sidebar_styles';
import { colorPalette } from '../../../../utils/constants/styles';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.town = {
      tileBackgroundColor: colorPalette.accent1Color,
      name: this.props.townName,
      imageUrl: this.props.townImageUrl,
    };
  }

  render() {
    return (
      <div className={this.props.className}>
        <Title>Wybrane miasto</Title>

        <StyledGridTile
          title={this.town.name}
          titleBackground={this.town.tileBackgroundColor}
          titleStyle={{ marginLeft: '-16px' }}
        >
          <img src={this.town.imageUrl} alt={this.town.name} />
        </StyledGridTile>

        <Button href="/oferty" label="ZMIEŃ" />
      </div>
    );
  }
}
