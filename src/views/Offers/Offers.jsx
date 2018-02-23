import React, { Component } from 'react';
import towns from '../../utils/content/miasta';
import { Container } from '../../utils/constants/styledComponents';
import { StyledTitle, TownsContainer, StyledLink, StyledGridTile, StyledGridList } from './Offers_styles';
import { colorPalette } from '../../utils/constants/styles';


export default class Towns extends Component {
  constructor(props) {
    super(props);
    this.tileHeight = 260;
    this.gridCols = 4;
    this.tileGaps = 30;
    this.tileBackgroundColor = colorPalette.accent1ColorRGBA;
  }

  renderGridTile(item) {
    return (
      <StyledLink key={item.name} to={item.path}>
        <StyledGridTile
          title={item.name}
          titleBackground={this.tileBackgroundColor}
          titleStyle={{ marginLeft: '-16px' }}
        >
          <img src={item.imageUrl} alt={item.name} />
        </StyledGridTile>
      </StyledLink>
    );
  }

  render() {
    return (
      <Container>
        <TownsContainer>
          <StyledTitle>Wybierz miasto</StyledTitle>
          <StyledGridList
            cellHeight={this.tileHeight}
            cols={this.gridCols}
            padding={this.tileGaps}
          >
            {towns.map(item => this.renderGridTile(item))}
          </StyledGridList>
        </TownsContainer>
      </Container>
    );
  }
}
