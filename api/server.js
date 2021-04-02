const express = require('express');
const cors = require('cors')
const helmet = require('helmet')

const server = express();

const teamsRouter = require('../Teams/teams-router');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/teams', teamsRouter);

server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || 'Hello World'
    res.json({ nbhlAPI: 'up'})
})

module.exports = server;