const db = require('../database/db-config');

function findTeams() {
    return db('nbhl-teams')
}

function findTeamById(id) {
    return db('nbhl-teams')
    .where({ id }).first()
}

function findByDivision(id) {
    return db('nbhl-teams')
    .where({divisionId: id})
}

module.exports = { findTeams, findTeamById, findByDivision }