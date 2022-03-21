const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./App");
const socketio = require("socket.io");
// requiring mongoose for db and dotenv for env files and app file for express server
process.on("uncaughtException", (err) => {
  process.exit(1);
});

//giving the path of the env file
dotenv.config({ path: "./config.env" });

//creating reference to DB from env file to connect to db
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
//connecting to db using mongoose to do queries and make schemas

// mongoose
//   .connect("mongodb+srv://Zinni:VgpM4LONmZ940MEK@cluster0.fopve.mongodb.net/Zinni", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then((con) => {
//     console.log("connected to db");
//   })
//   .catch((error) => {
//     console.log(error, "could not connect");
//   });
getConnection = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to DB Successful",DB);
  } catch (err) {
    console.log("Connection to DB Failed" + err);
  }
};
getConnection();
//defining port and setting up express server
// express has listeners listening to request event on defined port
const port = process.env.PORT || 3001;
const expressServer = app.listen(port, () => {
  console.log("running on port", port);
  console.log(process.env.NODE_ENV, "this is the node env");
});

// attaching a socket to the express server




// handling unhandled rejections
process.on("unhandledRejection", (err) => {
  //gracefully shutting down on un handled rejection
  server.close(() => {
    process.exit(1);
  });
});
// for heroku daily maintenence
process.on("SIGTERM", () => {
  server.close();
});

