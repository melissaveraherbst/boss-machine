const express = require('express');
const meetingsRouter = express.Router();
const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('./db');

// get all meetings
meetingsRouter.get('/', (req, res) => {
    res.send(getAllFromDatabase('meetings'));
})

// create a new meeting and save it to the database
meetingsRouter.post('/', (req, res) => {
    const newMeetingInstance = createMeeting();
    addToDatabase('meetings', newMeetingInstance);
    res.status(201).send(newMeetingInstance);
})

// delete all meetings from the data base
meetingsRouter.delete('/', (req, res) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
})

// export used in api.js
module.exports = meetingsRouter;