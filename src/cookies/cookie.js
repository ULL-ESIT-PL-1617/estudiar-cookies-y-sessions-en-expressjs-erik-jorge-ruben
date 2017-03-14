var express = require ('express');
var route = express.Router();
var cookieParser = require ('cookie-parser');
route.use (cookieParser());

route.get('/', function (req, res){
  res.cookie('prueba', "esto es una prueba").send("cookie establecida");
});

route.get('/eliminar', function (req, res){
  res.clearCookie('prueba');
  res.send("cookie eliminada");
});

route.get('/tiempo', function (req, res){
  res.cookie('tiempo', "esto es una cookie temporal", {maxAge : 10000}).send("esta cookie dura diez segundos");
});

route.get('/tiempo/prueba', function (req, res){
  if (req.cookies.tiempo){
    res.send("La cookie existes y está vigente");
  } else {
    res.send("La cookie ha expirado");
  }
});

module.exports = route;
