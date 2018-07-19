const CommentModel = require('./model');
const ThreadModel = require('../threads/model')

const comment = (threadId, { createdBy, content }) => new Promise((require, reject) => {
  CommentModel.create({ createdBy, content })
  .then(createdComment => ThreadModel.findById(threadId))
  .then(threadFound => {
    threadId.unshift(createdComment._id);
    return threadFound;
  })
  .then(ThreadFound => resolve(threadModel.comment))
  .catch(err => reject(err));
});

module.exports = {comment}
