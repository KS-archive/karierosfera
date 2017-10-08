const express = require('express');
const {mailContact, mailApplication, mailNewIdea, mailNewsletter} = require('./Mail.controller');
class MailRouters extends express.Router{
  constructor(){
    super();
    this.post('/contact', mailContact);
    this.post('/application', mailApplication);
    this.post('/newidea', mailNewIdea);
    this.post('/newsletter', mailNewsletter);
  };

};

module.exports = MailRouters;
