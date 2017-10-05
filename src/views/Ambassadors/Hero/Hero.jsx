import React, { Component } from 'react';
import { Image } from './Hero_styles';

export default class Hero extends Component {
  render() {
    return <Image src="/img/dla_ambasadorow/header bez pasków.jpg" srcset ="small.jg 500w, medium.jpg 1000w, large.jpg 2400w" src alt="Rekrutujemy ambasadorów - tło" />;
  }
}
