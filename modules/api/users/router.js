const express = require('express');
const Router = express.Router();

const UserController = require('./controller');

Router.post('/', (req, res) => {
  UserController.create(req.body)
  .then(userCreated => res.send({ sucesss: 1, user: userCreated }))
  .catch(err => res.status(500).send({ sucess: 0, err }));
});

Router.put('/:id', (req, res) => {
  UserController.update(req.params.id, req.body)
  .then(userFound => res.send({ sucesss: 1, user: userFound }))
  .catch(err => res.status(500).send({ sucess: 0, err }));
});

Router.get('/:id', (req, res) => {
  UserController.getUserInfo(req.params.id)
  .then(userFound => res.send({ sucesss: 1, user: userFound }))
  .catch(err => res.status(500).send({ sucess: 0, err }));
});

module.exports = Router;
