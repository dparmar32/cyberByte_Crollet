const mongoose = require('mongoose');


//change the connection to cyberbytes_crollet
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cyberbytes_crollet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
