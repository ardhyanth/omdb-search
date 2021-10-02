const express = require('express');
const schema = require('./schema');
const handler = require('./handler');
const { requestValidate } = require('../../middleware');

const router = express.Router();

/* GET movie search. */
router.get('/search', requestValidate(schema), handler);

module.exports = router;
