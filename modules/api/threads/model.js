const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mainPostsSchema = new Schema ({
  post: { type: String },
  active: { type: Boolean, default: true },
}, {
  timestamps: {  }
});

const ThreadModel = new Schema ({
  threadName : { type: String },
  createdBy: { type: String },
  stockTicker: { type: String },
  stockIndustry: { type: String },
  stocklastPrice: { type: Number },
  stockTargetPrice: { type: Number },
  mainPost: { type: [mainPostsSchema], default: [] },
  commentIds: {type: Array, default: [] },
  active: { type: Boolean, default: true },
}, {
  timestamps: {  }
});

module.exports = mongoose.model("Thread", ThreadModel);
