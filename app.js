const express = require('express');
const bodyParser = require('body-parser');

const expressValidator = require('express-validator');

const MailRouter = require('./api/routers/MailRouters');

class Application{
  constructor(){
    this.app = express();
    this.app.listen(3000, ()=>{
      console.log('Server started.');
    });
    this.middleware();
    this.routes();
  };

  middleware(){
    let app = this.app;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/', express.static(__dirname + '/public', {
      maxAge: config.STATIC_MAX_AGE
    }));
    app.use(expressValidator({
      errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
          , root    = namespace.shift()
          , formParam = root;

        while(namespace.length) {
          formParam += '[' + namespace.shift() + ']';
        }
        return {
          param : formParam,
          msg   : msg,
          value : value
        };
      }
    }));
  };

  routes(){
    let app = this.app;
    app.use('/api/mail', new MailRouter());
  };
};

new Application();
