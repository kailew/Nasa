const { planets } = require('../../models/planets.model');

function gettAllPlanets(req, res) {
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets
};