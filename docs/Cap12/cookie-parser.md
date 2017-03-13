## Manejo de cookies en Express
### ¿Qué son las cookies?

Las cookies es la vía que existe en html para dar persistencia. Como sabemos, el estandar html por si solo no permite guardar información acerca del estado en el que se encuentran las transacciónes que se realizan, por lo que no se podría almacenar información ni personalizar el contenido que se muestra, por ejemplo: un servicio web no sabría si las peticiones que llegan son de un usario logeado o no.

Para resolver este problema existen las cookies, son pequeñas cantidades de datos que se generan en el servidor, y que el cliente envía en cada petición, de esta manera, modificando variables dentro de esos datos, se puede guardar información acerca del cliente y el servidor es capaz de devolver una respuesta personalizada.

#########################


Cookies are small pieces of data sent from a website and are stored in user's web browser while user is browsing that website. Every time the user loads that website back, the browser sends that stored data back to website or server, to distinguish user's previous activity.

What is Express?
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. For more visit here

How Does Express Look Like?

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


Hello world express

Installation
So far we have seen, what is cookie and how a basic express app would look like. But now I will show you how to acquire cookie abilities in express. The very first thing you would be doing is to install cookie-parser middleware through npm into node_modules folder which can be found in your app folder. And to install it :

Open your terminal,
Browse to your app folder,
$ npm install cookie-parser
cookie-parser

Using Cookie-Parser
Import** cookie-parser** into your app

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
Syntax
Cookie-parser parses Cookie header and populate req.cookies with an object keyed by the cookie names. To set a new cookie lets define a new route in your express app like :

app.get('/cookie',function(req, res){
     res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
});
To check whether cookie has been set or not, goto to browser's console and write document.cookie.

Browser sends back that cookie to the server, every time when it requests that website. And to get a cookie which a browser might be sending to server by attaching it to request header, we can write following code :

app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
});
How to Set Cookie Expiration Time?
Cookie expire time can be set easily by :

res.cookie(name , 'value', {expire : new Date() + 9999});
Addition options for cookies can be set be passing an object as argument which carries additional settings for cookies. So, to set expire time to cookies, an object with expire property can be sent which holds the expire time in milliseconds.

An alternate approach to set cookie expiration age is to use optional magAge property.

res.cookie(name, 'value', {maxAge : 9999});
How to Delete Existing Cookie?
Existing cookies can be deleted very easily using clearCookie method, which accepts the name of the cookie which you want to delete.

app.get('/clearcookie', function(req,res){
     clearCookie('cookie_name');
     res.send('Cookie deleted');
});
Now, once again you can go and check in browser's console that the particular cookie has been deleted.
