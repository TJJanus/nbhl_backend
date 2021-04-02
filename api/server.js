const express = require('express');
const cors = require('cors')
const helmet = require('helmet')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || 'Hello World'
    res.json({ nbhlAPI: 'up'})
})

module.exports = server;