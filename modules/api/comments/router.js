const express = require('express');
const Router = express.Router();

const Commentcontroller = require('./controller');

Router.post('/:threadId', (req, res) => {
  CommentModel.create(req.params.threadId, req.body)
  .then(threadCreated => res.send({ sucesss: 1, thread: threadCreated }))
  .catch(err => res.status(500).send({ sucess: 0, err }));
});

module.export = Router;
