import React, { Component } from 'react';
import questions from '../../utils/content/faq';
import { Title } from '../../utils/constants/styledComponents';
import { StyledContainer, Collapsible, Question, Answer } from './Faq_styles';

export default class Faq extends Component {
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
          {answer.split('\n').map(i => <div key={i}>{i}</div>)}
        </Answer>
      </Collapsible>
    );
  }

  render() {
    const { open } = this.state;
    return (
      <StyledContainer>
        <Title>FAQ</Title>
        {questions.map((el, i) => this.renderCollapsible(el, i, open))}
      </StyledContainer>
    );
  }
}
