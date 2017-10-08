import React, { Component } from 'react';
import axios from 'axios';
import { Container as MainContainer } from '../../../utils/constants/styledComponents';
import { Container, Head, Title, Content, Form, Input, Button } from './NewArea_styles';

export default class NewArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: '',
    };
  }

  handleClick = () => {
    const { value } = this.state;
    if (!value.trim()) {
      this.setState({ error: 'Musisz cokolwiek zaproponować' });
    } else {
      axios.post(`${__ROOT_URL__}api/mail/newidea`, { value })
        .then(() => {
          this.setState({
            value: '',
            error: '',
          });
        });
    }
  }

  handleInputChange = (e) => {
    const error = (e.target.value.trim() && this.state.error) ? { error: '' } : {};
    this.setState({ value: e.target.value, ...error });
  }

  render() {
    const { error, value } = this.state;
    return (
      <Container>
        <MainContainer>
          <Head>
            <Title>Masz pomysł na nową dziedzinę konkursu?</Title>
            <Content>Podziel się z nami!</Content>
          </Head>
          <Form>
            <Input
              placeholder={error || 'Wpisz proponowane dziedziny'}
              value={value}
              onChange={this.handleInputChange}
              isError={!!error}
            />
            <Button primary label="Wyślij" onClick={this.handleClick} />
          </Form>
        </MainContainer>
      </Container>
    );
  }
}
