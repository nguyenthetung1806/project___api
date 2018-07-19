const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config-local.json');
const session = require('express-session');


const UserApirouter = require('./modules/api/users/router')
const ThreadApirouter = require('./modules/api/threads/router')
const CommentApirouter = require('./modules/api/threads/router')


mongoose.connect(
  config.mongoPath,
  err => {
    if (err) console.error(err);
    else console.log("Database connect successful");
  }
);



let app = express();

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false,
//     maxAge: 24 * 60 * 60 * 1000
//   }
// }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/comment', CommentApirouter);
app.use('/api/thread', ThreadApirouter);
app.use('/api/user', UserApirouter);

// app.get("/", (req, res) => {
//   console.log(Session.ID);
//   res.send('sđâsd')
// });

const port = 8000;

app.listen(port, (err) =>{
  if(err) console.log(err);
  else console.log('Server is up !!');
})
