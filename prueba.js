var github = require('octonode');
var client = github.client();
var readlineSync = require('readline-sync');
var fs = require('fs');
var fe = require('fs-extra');
var path = require('path');
var gulp = require(path.join(__dirname,'/', 'gulpfile.js'));
var cp = require('child_process');
var deasync = require('deasync');
var exec = deasync(cp.exec);
var Curl = require('node-libcurl').Curl;
var curl = new Curl();
var netrc = require('netrc');

var usuario_heroku = readlineSync.question('Introduzca el USUARIO de Heroku: ');
var password_heroku = readlineSync.question('Introduzca su contraseña de Heroku: ', { hideEchoBack: true });


    var fich = " ~/.netrc";
    
    var a = exec('cat' + fich);
    var tok = netrc.parse(a);
    var x =">> tok.json";
    exec('cat ' +tok+x);
   console.log(tok.password);
//  var json_token = JSON.parse(fs.readFileSync('./token-heroku.json','utf8'))
//  var token = json_token.password;
//  console.log("token is a :" + token);
// 
