const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/the-attic', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .catch((err) => {
    console.log(err);
    console.log(
      "⛔ There was an error connecting to MongoDB. See above for details."
    );
    console.log("Shutting down.");
    process.exit(1);
  });

module.exports = mongoose.connection;