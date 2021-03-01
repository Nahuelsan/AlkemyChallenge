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
server.put('/:id', (req, res,next)=>{
    console.log(req.body)
    console.log(req.params)
    const { id } = req.params
    const { concept, mount, date} = req.body
    if(!concept || !mount  || !date ){
        return res.status(400).send('Body must have a concept, mount and description')
    }
    operation.update(id, req.body)
    .then(r => res.send(r))
    .catch(next);
})

server.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    if (!id ) {
        return res.status(400).send('An id is needed to delete the product')
    }
    operation.delete(id)
	.then(r => res.send(r))
	.catch(next);
});

module.exports = server;