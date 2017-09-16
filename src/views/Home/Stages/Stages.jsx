import React, { Component } from 'react';
import { stages } from '../../../utils/content/strona_glowna';
import { Container, Stage, Icon, ContentWrapper, Title, Content } from './Stages_styles';

export default class Stages extends Component {
  renderStage = (stage) => {
    const { icon, title, content } = stage;
    return (
      <Stage key={icon}>
        <Icon src={icon} alt={`Ikona dla: ${title}`} />
        <ContentWrapper>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </ContentWrapper>
      </Stage>
    );
  }

  render() {
    return (
      <Container>
        {stages.map(stage => this.renderStage(stage))}
      </Container>
    );
  }
}
