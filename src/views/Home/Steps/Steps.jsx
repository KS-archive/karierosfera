import React, { Component } from 'react';
import { steps } from '../../../utils/content/strona_glowna';
import { Container, Step, Icon, ContentWrapper, Title, Content } from './Steps_styles';

export default class Steps extends Component {
  renderStep = (step) => {
    const { icon, title, content } = step;
    return (
      <Step key={icon}>
        <Icon src={icon} />
        <ContentWrapper>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </ContentWrapper>
      </Step>
    );
  }

  render() {
    return (
      <Container>
        {steps.map(step => this.renderStep(step))}
      </Container>
    );
  }
}
