import React, { Component } from 'react';
import validate from '../../../utils/validation';
import { inputStyle } from '../../../utils/constants/styles';
import { Container, Subtitle, Form, StyledTextField, Button } from './ContactForm_styles';

export default class ContactForm extends Component {
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
    console.log(values);
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
