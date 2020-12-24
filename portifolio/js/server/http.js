var service = require ('./servidor');
var express = ('express')
const path = require('path');
var bodyParser = require('body-parser');
var vm = this;
var app = service(3000);

var relatos = [];

app.interceptor(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.interceptor(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});

app.get('/relatos', function (req, res) {
    res.write(JSON.stringify(relatos));
    res.end();
});

app.post('/relatos', function (req, res) {
    var relato = req.body;
    relatos.push(JSON.parse(relato));
    res.end();
  });
  
  app.post('/file', function (req, res) {
    console.log(req.body);
    res.end();
  });
  
  app.options('/file', function (req, res) {
    res.end();
  });
  
  app.options('/relatos', function (req, res) {
    res.end();
  });
