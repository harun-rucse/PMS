const mongoose = require("mongoose");

//Create schema for CRUD operations
const passwordCategorySchema = new mongoose.Schema({
  addNewCategory: {
    type: String,
    required: [true, "Please provied a category name"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//craete model
const PasswordCategory = mongoose.model(
  "PasswordCategory",
  passwordCategorySchema
);

//export User
module.exports = PasswordCategory;
