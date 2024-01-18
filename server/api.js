const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions-router');
apiRouter.use('/minions', minionsRouter);

const ideasRouter = require('./ideas-router');
apiRouter.use('/ideas', ideasRouter);

const meetingsRouter = require('./meetings-router');
apiRouter.use('/meetings', meetingsRouter);

// export used in server.js
module.exports = apiRouter;