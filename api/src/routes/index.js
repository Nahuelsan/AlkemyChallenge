const router = require('express').Router();


const operation = require('./operation.js');

router.use('/operation', operation);

module.exports = router;