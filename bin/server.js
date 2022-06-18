'use strict' //Força codar corretamente

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const port = normalizePort(process.env.port || '3000');
app.set('port', port)

const server = http.createServer(app);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

server.listen(port);
console.log(`API rodando na porta: ${port}`);