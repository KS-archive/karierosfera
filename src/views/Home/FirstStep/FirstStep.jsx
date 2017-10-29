import React, { Component } from 'react';
import axios from 'axios';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { addNotification } from '../../../actions/notifications';
import { Container, Head, ContentWrapper, Images, Image, Title, Content, Form, Input, Button } from './FirstStep_styles';

class FirstStep extends Component {
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
      this.setState({ error: 'E-mail jest wymagany' });
    } else {
      axios.post(`${__ROOT_URL__}api/mail/newsletter`, { email: value })
        .then(() => {
          this.setState({
            value: '',
            error: '',
          });
          this.props.addNotification('Zapisano', 'Zostałeś zapisany na nasz newsletter', 'success');
        }, () => {
          this.props.addNotification('Wystąpił błąd', 'Zapis na newsletter nie powiódł się. Spróbuj ponownie później.', 'error');
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
        <Head>
          <ContentWrapper>
            <Title>Czas na pierwszy krok!</Title>
            <Content>
              Obserwuj akcje Karierosfery i śledź nowości na naszych kanałach social media.
            </Content>
          </ContentWrapper>
          <Images>
            <Image
              src="/img/o_konkursie/facebook.svg"
              alt="Ikona facebooka"
              onClick={() => { window.open('https://pl-pl.facebook.com/karierosfera/', '_blank'); }}
            />
            <Image
              src="/img/o_konkursie/insta.svg"
              alt="Ikona instagrama"
              onClick={() => { window.open('https://www.instagram.com/wiggor.pl/', '_blank'); }}
            />
          </Images>
        </Head>
        <Form>
          <Input
            placeholder={error || 'Wpisz swój adres e-mail'}
            value={value}
            onChange={this.handleInputChange}
            isError={!!error}
          />
          <Button onClick={this.handleClick}>Zapisz się do newslettera</Button>
        </Form>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNotification }, dispatch);
}

export default connect(null, mapDispatchToProps)(FirstStep);
