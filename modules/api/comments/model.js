const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CounterCommentModel =  new Schema ({
  createdBy: { type: String },
  content: { type: String },
}, {
    timestamps: {  },
});


const CommentModel = new Schema ({
  createdBy: { type: String },
  content: { type: String },
  counterComments: { type: [CounterCommentModel], default: [] }
}, {
    timestamps: {  },
});

module.exports = mongoose.model("Comment", CommentModel);
