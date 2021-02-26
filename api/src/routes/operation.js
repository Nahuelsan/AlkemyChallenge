const server = require('express').Router();
const operation = require('../controllers/Operation.js');

server.get('/', (req, res, next) =>{
    operation.read()
    .then(r=> res.send(r))
    .catch(next);
})

server.post('/', (req, res,next)=>{
    const { concept, mount, date, type} = req.body
    if(!concept || !mount  || !date || !type){
        return res.status(400).send('Body must have a concept, mount and description')
    }
    operation.create(req.body)
    .then(r => res.send(r))
    .catch(next);
})

module.exports = server;