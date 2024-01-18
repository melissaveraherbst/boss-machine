const express = require('express');
const ideasRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId } = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

// validate the ideaId param if present in the routes
ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (!idea) {
        res.status(404).send();
        return;
    } else {
        req.ideaId = id;
        next();
    }
});

// get all ideas
ideasRouter.get('/', (req, res) => {
    res.status(200).send(getAllFromDatabase('ideas'));
});

// get a single idea by id
ideasRouter.get('/:ideaId', (req, res) => {
    const idea = getFromDatabaseById('ideas', req.ideaId);
    res.send(idea);
});

// update a single idea by id
ideasRouter.put('/:ideaId', (req, res) => {
    const updatedIdeaInstance = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdeaInstance);
});

// create a new idea
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdeaInstance = addToDatabase('ideas', req.body);
    res.status(201).send(newIdeaInstance);
});

// delete a single idea by id
ideasRouter.delete('/:ideaId', (req, res) => {
    deleteFromDatabasebyId('ideas', req.ideaId);
    res.status(204).send();
});


// export used in api.js
module.exports = ideasRouter;