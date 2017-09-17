import React, { Component } from 'react';
import { coordinators } from '../../../utils/content/kontakt';
import { Container, Title, Subtitle, Email, CoordynatorsList, Coordinator, Icon, Content, Area, Name, Phone, Mail } from './Emails_styles';

export default class Emails extends Component {
  renderCoordinator = (coordinator) => {
    const { icon, area, name, phone, email } = coordinator;
    return (
      <Coordinator key={phone}>
        <Icon src={icon} alt="Ikona koperty" />
        <Content>
          <Area>{area}</Area>
          <Name>{name}</Name>
          <Phone>{phone}</Phone>
          <Mail href={`mailto:${email}`}>{email}</Mail>
        </Content>
      </Coordinator>
    );
  }

  render() {
    return (
      <Container>
        <Title>Masz pytania odnośnie neszych tegorocznych działań?</Title>
        <Subtitle>Napisz nam maila na</Subtitle>
        <Email href="mailto:kontakt@karierosfera.pl">kontakt@karierosfera.pl</Email>
        <Subtitle>odezwij się do jednego z naszych koordynatorów</Subtitle>
        <CoordynatorsList>
          {coordinators.map(coordinator => this.renderCoordinator(coordinator))}
        </CoordynatorsList>
      </Container>
    );
  }
}
