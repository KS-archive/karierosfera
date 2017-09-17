import React, { Component } from 'react';
import { questions } from '../../../utils/content/ambasadorzy';
import { Container, Title, Wrapper, Collapsible, Question, Answer } from './AmbassadorsFaq_styles';

export default class AmbassadorsFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: null,
    };
  }

  handleOpen = (index) => {
    if (this.state.open === index) {
      this.setState({ open: null });
    } else {
      this.setState({ open: index });
    }
  }

  renderCollapsible = (el, index, openId) => {
    const { question, answer } = el;
    const open = (openId === index);

    return (
      <Collapsible key={index}>
        <Question open={open} onClick={() => { this.handleOpen(index); }}>{question}</Question>
        <Answer open={open}>
          {answer.split('\n').map((e, i) => <div key={i}>{e}</div>)}
        </Answer>
      </Collapsible>
    );
  }

  render() {
    const { open } = this.state;
    return (
      <Container background="/img/dla_ambasadorow/stefan-stefancik-257625.jpg">
        <Title>Frequently asked questions</Title>
        <Wrapper>
          {questions.map((el, i) => this.renderCollapsible(el, i, open))}
        </Wrapper>
      </Container>
    );
  }
}
