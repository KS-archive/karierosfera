import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { icons, profits } from '../../../utils/content/ambasadorzy';
import { Container, Title, Wrapper, Icons, Icon, Profits, Profit } from './Benefits_styles';

export default class Benefits extends Component {
  render() {
    return (
      <Container background="/img/dla_ambasadorow/1690.jpg">
        <Title>Korzyści dla Ambasadorów</Title>
        <Wrapper>
          <Icons>
            {icons.map((icon, index) => <Icon key={index} icon={icon} />)}
          </Icons>
          <Profits>
            {profits.map((profit, index) => <Profit key={index}>{ReactHtmlParser(profit)}</Profit>)}
          </Profits>
        </Wrapper>
      </Container>
    );
  }
}
