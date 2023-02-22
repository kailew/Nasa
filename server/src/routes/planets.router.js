const express = require('express');

const {
    gettAllPlanets,
} = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planets', gettAllPlanets);

module.exports = planetsRouter;