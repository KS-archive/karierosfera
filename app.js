const express = require('express');
const bodyParser = require('body-parser');

const expressValidator = require('express-validator');

const MailRouter = require('./api/routers/MailRouters');
const config = require('./api/data/config');
class Application{
  constructor(){
    this.app = express();
    this.app.listen(process.env.PORT, ()=>{
      console.log('Server started.');
    });
    this.middleware();
    this.routes();
  };

  middleware(){
    let app = this.app;
    app.use(bodyParser.json());
    app.use('/', express.static(__dirname + '/public', {
      maxAge: config.STATIC_MAX_AGE
    }));
    app.use('/', express.static(__dirname + '/build'));
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
    app.get('*', function(req, res){
      res.sendfile(__dirname + '/public/index.html');
    });
  };
};

new Application();
