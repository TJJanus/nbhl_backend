const express = require('express');
const db = require('../database/db-config');

const Teams = require('../Teams/teams-model');
const router = express.Router();
const server = require('../api/server');


router.get('/', (req, res) => {
    Teams.findTeams()
    .then(teams => {
        res.status(200).json(teams)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'Could not get the food item'})
    })
})

router.get('/:id', (req, res) => {
    
    const {id} = req.params
    Teams.findTeamById(id)
    .then(teams => {
        if (teams) {
            res.status(200).json(teams)
        } else {
            res.status({ message: 'The team with this ID could not be found'})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'Could not get team with that ID'})
    })
})

router.get('/division/:id', (req, res) => {
    Teams.findByDivision(req.params.id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        console.log(error)
    })

})

module.exports = router;