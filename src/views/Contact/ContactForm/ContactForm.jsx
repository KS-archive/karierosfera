import React, { Component } from 'react';
import axios from 'axios';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { addNotification } from '../../../actions/notifications';
import validate from '../../../utils/validation';
import { inputStyle } from '../../../utils/constants/styles';
import { Container, Subtitle, Form, StyledTextField, Button } from './ContactForm_styles';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      content: '',
      errors: {},
    };

    this.toValidate = {
      name: { required: true },
      email: { required: true },
      subject: { required: true },
      content: { required: true },
    };
    this.values = ['name', 'email', 'subject', 'content'];
  }

  handleSubmit = () => { validate(this, this.submit); }

  submit = (values) => {
    axios.post(`${__ROOT_URL__}api/mail/contact`, values)
      .then(() => {
        this.setState({
          name: '',
          email: '',
          subject: '',
          content: '',
          errors: {},
        });
        this.props.addNotification('Wysłano', 'Twoja wiadomość została wysłana.', 'success');
      }, () => {
        this.props.addNotification('Wystąpił błąd', 'Twoja wiadomość nie została wysłana.', 'error');
      });
  }

  handleTextFieldChange = (e, stateName) => {
    const errors = { ...this.state.errors };
    if (errors[stateName]) {
      errors[stateName] = null;
    }
    this.setState({ [stateName]: e.target.value, errors });
  }

  renderTextField = (label, stateName, extend = {}) => {
    const { errors } = this.state;
    const attrs = {
      floatingLabelText: label,
      value: this.state[stateName],
      onChange: (e) => { this.handleTextFieldChange(e, stateName); },
      errorText: errors[stateName],
      ...inputStyle,
      ...extend,
    };
    return <StyledTextField {...attrs} />;
  };

  render() {
    const multiline = {
      fullWidth: true,
      multiLine: true,
      rows: 4,
    };

    return (
      <Container>
        <Subtitle>lub wypełnij poniższy formularz kontaktowy</Subtitle>
        <Form>
          {this.renderTextField('Imię i nazwisko', 'name')}
          {this.renderTextField('E-mail', 'email')}
          {this.renderTextField('Temat', 'subject', { fullWidth: true })}
          {this.renderTextField('Treść wiadomości', 'content', multiline)}
          <Button
            label="Wyślij wiadomość"
            onClick={this.handleSubmit}
            primary
          />
        </Form>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNotification }, dispatch);
}

export default connect(null, mapDispatchToProps)(ContactForm);
