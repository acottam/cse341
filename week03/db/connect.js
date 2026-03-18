const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const initDb = (callback) => {
  if (mongoose.connection.readyState) {
    return callback(null, mongoose);
  }
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => callback(null, mongoose))
    .catch((err) => callback(err));
};

module.exports = { initDb };
