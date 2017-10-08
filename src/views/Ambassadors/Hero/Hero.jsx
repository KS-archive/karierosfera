import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Image } from './Hero_styles';

export default class Hero extends Component {
  render() {
    return (
      [
        <MediaQuery minWidth={1100} key={1}>
          <Image src="/img/dla_ambasadorow/header.jpg" alt="Rekrutujemy ambasadorów - tło" />
        </MediaQuery>,
        <MediaQuery maxWidth={1099} key={2}>
          <Image src="/img/dla_ambasadorow/header-mobile.jpg" alt="Rekrutujemy ambasadorów - tło" />
        </MediaQuery>,
      ]
    );
  }
}
