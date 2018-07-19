const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const UserModel = new Schema ({
  username: { type: String, required: true
     // ,unique: true
   },
  password: { type: String, required: true },
  name: { type: String },
  email: { type: String
    // ,unique: true
  },
  avatar: { type: String },
  authorities: [{ type: Array, default: ['user'] }],
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("User", UserModel);
