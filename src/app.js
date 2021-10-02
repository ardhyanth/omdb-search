const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const { createLogger } = require('bunyan');

const searchRouter = require('./routes/search');
const config = require('../config');
const { errorHandler, requestLogger, contextRegister } = require('./middleware');

const logger = createLogger(config.logger);

const app = express();

app.use(requestLogger(logger));
app.use(contextRegister(config));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(searchRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorHandler);

module.exports = app;
