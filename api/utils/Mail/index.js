"use strict";
const nodemailer = require('nodemailer');
const config = require('./../../data/config');
const contactTemplate = require('./Templates/contact.template');
const newsletterTemplate = require('./Templates/newsletter.template');
const newIdeaTemplate = require('./Templates/newIdea.template');
const ambassadorTemplate = require('./Templates/ambassador.template');

/**
 * Send mail and return promise.
 * @param content
 * @returns {Promise}
 * @private
 */
const _sendMail = (content, transporter) => {
  let _content = content;

  return new Promise((resolve, reject)=>{

    // send mail with defined transport object
    transporter.sendMail(_content, (error, info) => {
      if (error) {
        reject({
          success: false,
          message: 'Sending email error',
          errors: {
            email: error
          }
        });
      }
      resolve({
        success: true,
        message: 'Mail sended with success',
        data: {
          info: info
        }
      });
    });
  })
};
class Mail {
  constructor(){
    this.transporter = nodemailer.createTransport({
      host: config.EMAIL_HOST,
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
        user: config.EMAIL_USERNAME,
        pass: config.EMAIL_PASSWORD
      }
    });
  };

  /**
   * Send mail confirmation at address.
   * @param content
   * @returns {Promise}
   */
  sendConfirmRegister(mail, userId){
    let content = {
      from: `"InStudy 👻" <${config.EMAIL_USERNAME}>`, // sender address
      to: ((config.TEST_MODE) ? `piotr.pietruszka@o2.pl, konrisz96@gmail.com` : mail), // list of receivers //TODO: change to mail value
      subject: 'inStudy - potwierdzenie rejestracji', // Subject line
      text: 'Hello world ?', // plain text body
      html: require("./templates/mailConfirmation.template")(userId) // html body
    };

    return _sendMail(content, this.transporter);
  };

  sendConfirmPasswordRecovery(mail, token){
    let content = {
      from: `"InStudy 👻" <${config.EMAIL_USERNAME}>`, // sender address
      to: ((config.TEST_MODE) ? `piotr.pietruszka@o2.pl, konrisz96@gmail.com` : mail), // list of receivers //TODO: change to mail value
      subject: 'inStudy - odzyskiwanie hasła', // Subject line
      text: 'Hello world ?', // plain text body
      html: require("./templates/mailPasswordRecovery.template")(token) // html body
    };

    return _sendMail(content, this.transporter);
  };
  sendContactMail(name, email, subject, mailContent){
    const content = {
      from: email, // sender address
      to: config.ADMIN_MAIL,
      subject,
      text: mailContent,
      html: contactTemplate(name, email, subject, mailContent)
    };

    return _sendMail(content, this.transporter);
  };

  sendApplicationMail(firstname, surname, email, phone,
                      city, university, inOrganisation, organisationName, fweWordsAbout,
                      acceprReg){
    const content = {
      from: email,
      to: config.ADMIN_MAIL,
      subject: "Ambasador",
      text: 'content',
      html: ambassadorTemplate(firstname, surname, email, phone,
        city, university, inOrganisation, organisationName, fweWordsAbout,
        acceprReg)
    };

    return _sendMail(content, this.transporter);
  };

  sendNewIdeaMail(value){
    const content = {
      from: 'non',
      to: config.ADMIN_MAIL,
      subject: "Nowy pomysł",
      text: "content",
      html: newIdeaTemplate(value)
    };

    return _sendMail(content, this.transporter);
  };

  sendNewsletterMail(email){
    const content = {
      from: email,
      to: config.ADMIN_MAIL,
      subject: "Newsletter",
      text: 'content',
      html: newsletterTemplate(email)
    };

    return _sendMail(content, this.transporter);
  };
}

module.exports = Mail;
