const server = require('express').Router();
const user = require('../controllers/User.js');

server.get('/', (req, res, next) => {
    user.read()
    .then(r => res.send(r))
})