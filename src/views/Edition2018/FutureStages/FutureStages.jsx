import React, { Component } from 'react';
import { stages } from '../../../utils/content/edycja_2018';
import { Title } from '../../../utils/constants/styledComponents';
import { Container, Subtitle, StagesList, Stage, IconWrapper, Icon, Name, Content } from './FutureStages_styles';

export default class FutureStages extends Component {
  renderStage = (stage) => {
    const { iconSrc, reverseIconSrc, name, content } = stage;
    return (
      <Stage key={name}>
        <IconWrapper>
          <Icon iconSrc={iconSrc} reverseIconSrc={reverseIconSrc} />
        </IconWrapper>
        <Name>{name}</Name>
        <Content>{content}</Content>
      </Stage>
    );
  }

  render() {
    return (
      <Container>
        <Title>Terminarz</Title>
        <Subtitle>Terminy poszczególnych etapów zostaną ogłoszone w listopadzie 2017 r.</Subtitle>
        <StagesList>
          {stages.map(stage => this.renderStage(stage))}
        </StagesList>
      </Container>
    );
  }
}
