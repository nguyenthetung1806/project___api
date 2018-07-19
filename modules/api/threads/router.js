const express = require('express');
const Router = express.Router();

const ThreadController = require('./controller');

Router.post('/', (req, res) => {
  ThreadController.createThread(req.body)
  .then(threadCreated => res.send({ sucesss: 1, thread: threadCreated }))
  .catch(err => res.status(500).send({ sucess: 0, err }));
});

Router.get('/', (req, res) => {
  ThreadController.listThreadByPage(req.query.pageNumber || 1, req.query.loadLimit || 5)
  .then(threadsFound => res.send({ sucesss: 1, threads: threadsFound }))
  .catch(err => res.status(500).send({ sucess: 0, err }));
});

Router.get('/search', (req, res) => {
  ThreadController.searchThread(req.query.pageNumber || 1, req.query.loadLimit || 5, req.query.searchString )
  .then(threadsFound => res.send({ sucesss: 1, threads: threadsFound }))
  .catch(err => res.status(500).send({ sucess: 0, err }));
});

Router.put('/:id', (req, res) => {
  ThreadController.deleteThread(req.params.id)
  .then(threadFound => res.send({ sucesss: 1, thread: threadFound }))
  .catch(err => res.status(500).send({ sucess: 0, err }));
});


module.exports = Router;
