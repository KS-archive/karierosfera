const Mail = require('./../utils/Mail');
const mailContact = (req, res) => {
  req.checkBody('name', 'Invalid params').notEmpty();
  req.checkBody('email', 'Invalid params').notEmpty();
  req.checkBody('subject', 'Invalid params').notEmpty();
  req.checkBody('content', 'Invalid params').notEmpty();

  req.getValidationResult()
    .then((result)=> {
      if (!result.isEmpty()) {
        res.status(400).json(result.array());
      } else {
        new Mail().sendContactMail(req.body.name, req.body.email, req.body.subject, req.body.content)
          .then(()=>{
            res.status(200).json({success: true, message: 'Wysłano wiadomość.'});
          })
          .catch((err)=>{
            res.status(400).json({success: false, message: 'Błąd wysyłania wiadomości.'});
          });
      }
    });
};

const mailApplication = (req, res) => {
  req.checkBody('firstname', 'Invalid params').notEmpty();
  req.checkBody('surname', 'Invalid params').notEmpty();
  req.checkBody('email', 'Invalid params').notEmpty();
  req.checkBody('phone', 'Invalid params').notEmpty();
  req.checkBody('city', 'Invalid params').notEmpty();
  req.checkBody('university', 'Invalid params').notEmpty();
  req.checkBody('fweWordsAbout', 'Invalid params').notEmpty();
  req.checkBody('inOrganization', 'Invalid params').notEmpty();
  req.checkBody('organisationName', 'Invalid params').notEmpty();
  req.checkBody('acceprReg', 'Invalid params').notEmpty();

  req.getValidationResult()
    .then((result)=> {
      if (!result.isEmpty()) {
        res.status(400).json(result.array());
      } else {
        console.log(req.body)
        new Mail().sendApplicationMail(req.body.firstname, req.body.surname,
                                    req.body.email, req.body.phone, req.body.city, req.body.university,
                                    req.body.fweWordsAbout, req.body.inOrganization, req.body.organisationName,
                                    req.body.acceprReg)
          .then(()=>{
            res.status(200).json({success: true, message: 'Wysłano wiadomość.'});
          })
          .catch((err)=>{
            res.status(400).json({success: false, message: 'Błąd wysyłania wiadomości.'});
          });
      }
    });
};

const mailNewIdea = (req, res) => {
  req.checkBody('value', 'Invalid params').notEmpty();

  req.getValidationResult()
    .then((result)=> {
      if (!result.isEmpty()) {
        res.status(400).json(result.array());
      } else {
        new Mail().sendNewIdeaMail(req.body.value)
          .then(()=>{
            res.status(200).json({success: true, message: 'Wysłano wiadomość.'});
          })
          .catch((err)=>{
            res.status(400).json({success: false, message: 'Błąd wysyłania wiadomości.'});
          });
      }
    });
};

const mailNewsletter = (req, res) => {
  req.checkBody('email', 'Invalid params').notEmpty();

  req.getValidationResult()
    .then((result)=> {
      if (!result.isEmpty()) {
        res.status(400).json(result.array());
      } else {
        new Mail().sendNewsletterMail(req.body.email)
          .then(()=>{
            res.status(200).json({success: true, message: 'Wysłano wiadomość.'});
          })
          .catch((err)=>{
            res.status(400).json({success: false, message: 'Błąd wysyłania wiadomości.'});
          });
      }
    });
};
module.exports = {
  mailContact, mailApplication, mailNewIdea, mailNewsletter
};
