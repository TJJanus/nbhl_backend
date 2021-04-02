const db = require('../database/db-config');

function findTeams() {
    return db('nbhl-teams')
}

function findTeamById(id) {
    return db('nbhl-teams')
    .where({ id }).first()
}

module.exports = { findTeams, findTeamById }