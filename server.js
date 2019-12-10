const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
//connect database
mongoose
  .connect(DB, {
    useNewUrlParser: true
  })
  .then(() => console.log("DB connect successful!"))
  .catch(err => console.log("DB connection failed!"));

//Start the server
const port = process.env.PORT || 3000;
app.listen(port);
