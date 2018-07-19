const ThreadModel = require('./model');

const createThread = ({ threadName, createdBy, stockTicker, stockIndustry, mainPost }) => new Promise((resolve, reject) => {
  ThreadModel.create({ threadName, createdBy, stockTicker, stockIndustry, mainPost })
  .then(threadCreated => resolve(threadCreated._id))
  .catch(err => reject(err));
});

const listThreadByPage = (pageNumber, loadLimit) => new Promise((resolve, reject) => {

    ThreadModel.find({ active: true })
    .sort({ updatedAt: -1 }) // sort by latest threads
    .skip((Number(pageNumber) - 1) * Number(loadLimit)) // divide threads into pages
    .limit(Number(loadLimit)) // number of page to send
    .exec()
    .then(threads => resolve(threads))
    .catch(err => reject(err));
  });

const searchThread = (pageNumber, loadLimit, searchString) => new Promise((resolve, reject) => {
    ThreadModel.find({ active: true })
    .sort({ updatedAt: -1 }) // sort by latest threads
    .then(threads => {
      const threadsFiltered = threads.filter(thread => thread.stockTicker.includes(searchString));
      return threadsFiltered;
    })
    .then(threadsFiltered => {
      const start = (Number(pageNumber) -1) * Number(loadLimit);
      const end = Math.min(( (Number(pageNumber)) * Number(loadLimit)), threadsFiltered.length) ;
      const threadsSliced = threadsFiltered.slice(start, end);
      return threadsSliced;
    })
    .then(threads => resolve(threads))
    .catch(err => reject(err));
  });


const deleteThread = (threadId) => new Promise((resolve, reject) => {
    ThreadModel.findByIdandUpdate(
      threadId,
      { active: false }
    )
    .then(deletedThread => resolve())
    .catch(err => reject(err));
  });

module.exports = {
  createThread,
  listThreadByPage,
  deleteThread,
  searchThread
}
