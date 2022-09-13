const express = require('express');

const pacientesRouter = require('./pacientes.router');
const medicosRouter = require('./medicos.router');
const familiaresRouter = require('./familiares.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/medicos', medicosRouter);
    router.use('/pacientes', pacientesRouter);
    router.use('/familiares', familiaresRouter);

}

module.exports = routerApi;