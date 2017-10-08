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

  sendContactMail(name, email, subject, mailContent){
    const content = {
      from: email,
      to: config.MAIL_CONTACT,
      subject,
      text: mailContent,
      html: contactTemplate(name, email, subject, mailContent)
    };

    return _sendMail(content, this.transporter);
  };

  sendApplicationMail(firstname, surname, email, phone,
                      city, university, inOrganisation, organisationName, fweWordsAbout,
                      acceprReg){
    console.log(firstname, surname, email, phone,
      city, university, inOrganisation, organisationName, fweWordsAbout,
      acceprReg);
    const content = {
      from: email,
      to: config.MAIL_AMBASSADOR,
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
      to: config.MAIL_NEWIDEA,
      subject: "Nowy pomysł",
      text: "content",
      html: newIdeaTemplate(value)
    };

    return _sendMail(content, this.transporter);
  };

  sendNewsletterMail(email){
    const content = {
      from: email,
      to: config.MAIL_NEWSLETTER,
      subject: "Newsletter",
      text: 'content',
      html: newsletterTemplate(email)
    };

    return _sendMail(content, this.transporter);
  };
}

module.exports = Mail;
