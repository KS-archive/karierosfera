import React, { Component } from 'react';
import axios from 'axios';
import validate from '../../../utils/validation';
import { inputStyle } from '../../../utils/constants/styles';
import { Container, Title, Wrapper, StyledTextField, StyledCheckbox, CheckboxError, Button } from './ApplicationForm_styles';

export default class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      email: '',
      phone: '',
      city: '',
      university: '',
      inOrganization: false,
      organizationName: '',
      fweWordsAbout: '',
      acceprReg: false,
      errors: {},
    };

    this.toValidate = {
      firstname: { required: true },
      surname: { required: true },
      email: { required: true },
      phone: { required: true },
      city: { required: true },
      university: { required: true },
      fweWordsAbout: { required: true },
      acceprReg: { checked: 'Musisz wyrazić zgodę na przetwarzanie danych' },
    };
    this.values = ['firstname', 'surname', 'email', 'phone', 'city', 'university', 'inOrganization', 'organizationName', 'fweWordsAbout', 'acceprReg'];
  }

  handleSubmit = () => { validate(this, this.submit); }

  submit = (values) => {
    if (!values.inOrganization) {
      values.organizationName = '';
    }
    console.log(values);
    axios.post(`${__ROOT_URL__}api/mail/application`, values)
      .then(() => {
        this.setState({
          firstname: '',
          surname: '',
          email: '',
          phone: '',
          city: '',
          university: '',
          inOrganization: false,
          organizationName: '',
          fweWordsAbout: '',
          acceprReg: false,
          errors: {},
        });
      });
  }

  handleTextFieldChange = (e, stateName) => {
    const errors = { ...this.state.errors };
    if (errors[stateName]) {
      errors[stateName] = null;
    }
    this.setState({ [stateName]: e.target.value, errors });
  }

  handleChackboxChange = (stateName) => {
    const errors = { ...this.state.errors };
    if (errors[stateName]) {
      errors[stateName] = null;
    }
    if (stateName === 'inOrganization') {
      if (!this.state.inOrganization) {
        this.toValidate.organizationName = { required: true };
      } else {
        delete this.toValidate.organizationName;
      }
    }
    this.setState({ [stateName]: !this.state[stateName], errors });
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
    const { inOrganization, acceprReg, errors } = this.state;
    const multilineAttrs = {
      fullWidth: true,
      multiLine: true,
      rows: 4,
    };

    return (
      <Container>
        <Title>Formularz zgłoszeniowy</Title>
        <Wrapper>
          {this.renderTextField('Imię', 'firstname')}
          {this.renderTextField('Nazwisko', 'surname')}
          {this.renderTextField('E-mail', 'email')}
          {this.renderTextField('Telefon', 'phone')}
          {this.renderTextField('Miasto', 'city')}
          {this.renderTextField('Uczelnia, rok studiów', 'university')}
          {this.renderTextField('Kilka słów o Tobie', 'fweWordsAbout', multilineAttrs)}
          <StyledCheckbox
            label="Działam w organizacji studenckiej lub kole naukowym"
            checked={inOrganization}
            onCheck={() => this.handleChackboxChange('inOrganization')}
          />
          {(inOrganization) &&
            this.renderTextField('Nazwa organizacji/koła', 'organizationName')
          }
          <StyledCheckbox
            label="Wyrażam zgodę na przetwarzanie przez Stowarzyszenie Studenckie WIGGOR z siedzibą we Wrocławiu, ul. Kamienna 57, 53-307 Wrocław, moich danych osobowych zawartych w formularzu zgłoszeniowym w celu i zakresie niezbędnym do przeprowadzenia procesu rekrutacji."
            checked={acceprReg}
            onCheck={() => this.handleChackboxChange('acceprReg')}
            fullWidth
          />
          {(errors.acceprReg) && <CheckboxError>{errors.acceprReg}</CheckboxError>}
          <Button
            label="Wyślij zgłoszenie"
            onClick={this.handleSubmit}
            primary
          />
        </Wrapper>
      </Container>
    );
  }
}
