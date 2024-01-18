const express = require('express');
const minionsRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId } = require('./db');

// validates the minionId param for all routes if present
minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (!minion) {
        res.status(404).send();
    } else {
        req.minionId = id;
        next();
    }
});

// validates the workId param for all routes if present
minionsRouter.param('workId', (req, res, next, id) => {
    const work = getFromDatabaseById('work', id);
    if (!work) {
        res.status(404).send();
    } else {
        req.workId = id;
        next();
    }
});

// get all minions
minionsRouter.get('/', (req, res) => {
    res.send(getAllFromDatabase('minions'));
});

// get a single minion by id
minionsRouter.get('/:minionId', (req, res) => {
    // minionsRouter.param('mionionId')... is run first
    const minion = getFromDatabaseById('minions', req.minionId);
    res.send(minion);
});

// update a single minion by id
minionsRouter.put('/:minionId', (req, res) => {
    const updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinionInstance);
});

// create a new minion and save it to the databse
minionsRouter.post('/', (req, res) => {
    const newMinionInstance = addToDatabase('minions', req.body);
    res.status(201).send(newMinionInstance);
});

// delete a minion by id
minionsRouter.delete('/:minionId', (req, res) => {
    deleteFromDatabasebyId('minions', req.minionId);
    res.status(204).send();
});

// get all work for the specified minion
minionsRouter.get('/:minionId/work', (req, res) => {
    const allWork = getAllFromDatabase('work');
    const minionWork = allWork.filter(work => work.minionId === req.minionId);
    res.send(minionWork);
});

// update a single work by id
minionsRouter.put('/:minionId/work/:workId', (req, res) => {
    if (req.minionId !== req.body.minionId) {
        res.status(400).send();
    }
    const updatedWorkInstance = updateInstanceInDatabase('work', req.body);
    res.send(updatedWorkInstance);
});

// create a new work object and save it to the database
minionsRouter.post('/:minionId/work', (req, res) => {
    const newWorkInstance = addToDatabase('work', req.body);
    res.status(201).send(newWorkInstance);
});

// delete a single work from database by id
minionsRouter.delete('/:minionId/work/:workId', (req, res) => {
    deleteFromDatabasebyId('work', req.workId);
    res.status(204).send();
});

// export used in api.js
module.exports = minionsRouter;