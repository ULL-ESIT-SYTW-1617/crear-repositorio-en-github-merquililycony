// importar
    var express = require('express');
    var app = express();
    var path = require('path');


    // escuchar
   // app.listen(8080);
   app.set('port', process.env.PORT || 8080);

    deploy_heroku.push_heroku();


//heroku git:remote -a heroku-project-name
app.listen(app.get('port'), function() {
  console.log('Servidor escuchando en el puerto:'+app.get('port'));
});


module.exports = app;
