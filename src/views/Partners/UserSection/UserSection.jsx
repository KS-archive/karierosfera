import React, { Component } from 'react';
import { Container, TopLabel, UserImage} from './UserSection_styles';

export default class UserSection extends Component {

  render() {
    return (
      <Container>
        <TopLabel>Uczestnik Karierosfery</TopLabel>
        <UserImage background="/img/partnerzy2017/user.png"></UserImage>
      </Container>
    );
  }
}
