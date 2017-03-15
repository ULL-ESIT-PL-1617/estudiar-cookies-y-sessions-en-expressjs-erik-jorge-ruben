var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "¡Shh, es un secreto!"}));

app.get('/', function(req, res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("Has visitado esta página " + req.session.page_views + " veces");
    }
    req.session.page_views = 1;
    res.send("¡Bienvenido a esta página por primera vez!");
});

//app.listen(8080);
