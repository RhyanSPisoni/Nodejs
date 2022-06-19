'use strict';

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Conecta ao Banco
mongoose.connect('mongodb+srv://developrhyan:kAVOhjs1Q3GZul8Z@developmentrhyan.30bwd.mongodb.net/test')

//Carrega as Rotas
const indexRoute = require('./routes/index-routes')
const productRoute = require('./routes/products-routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;