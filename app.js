#!/usr/bin/env node
var express = require('express');
var path = require('path');
var app = express();
//var basic = require('./src/basic');
//var routing = require('./src/routing');
//var routing_api = require('./src/routing_api');
//var middleware = require('./src/middleware');
var cookies = require('./src/cookies/cookie.js');
var sessions = require('./src/sessions/sessions.js');
var auth = require('./src/sessions/auth.js');

// HEROKU
app.set('port', (process.env.PORT || 8080));
// Servidor para libro

app.get('/', function(pet, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(path.resolve('public')));

// Carga de los módulos de los códigos de ejemplo
//app.use('/basic', basic);
//app.use('/routing', routing);
//app.use('/myFirstRoute', routing_api);
//app.use('/middleware', middleware);
app.use('/cookies', cookies);
app.use('/sessions', sessions);
app.use('/auth', auth);




// Establecer puerto de escucha
const server = app.listen(app.get('port'), () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
//app.listen(port_iaas);
