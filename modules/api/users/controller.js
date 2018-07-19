const UserModel = require('./model');

const create = ({ username, password, email, name, avatar }) => new Promise( (resolve, reject) => {
    UserModel.create({ username, password, email, name, avatar })
    .then(userCreated => resolve(userCreated._id))
    .catch(err => reject(err));
});

const update = (userId, { password, email, name, avatar }) => new Promise((resolve, reject) => {
    UserModel.findById(userId)
    .then(userFound => {
      if(password) userFound.passwordChange = password;
      if(email) userFound.email = email;
      if(name) userFound.name = name;
      if(avatar) userFound.avatar = avatar;

      return userFound.save();
    })
    .then(userCreated => resolve(userCreated))
    .catch(err => reject(err));
});

const getUserInfo = (userId ) => new Promise((resolve, reject) => {
    UserModel.findById(userId, " -active")
    .then(userFound => resolve(userFound))
    .catch(err => reject(err));
});


module.exports = {
  create,
  update,
  getUserInfo
}
