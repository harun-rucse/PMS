const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

//Create schema for CRUD operations
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "User name already exists"],
    required: [true, "Please provied a name"]
  },
  email: {
    type: String,
    required: [true, "Please provied an email"],
    unique: [true, "This email is already exists"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide an valid email"]
  },
  password: {
    type: String,
    required: [true, "Please provied a password"]
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm password"],
    validate: {
      validator: function(el) {
        return this.password === el;
      },
      message: "Password does not match"
    }
  },
  role: {
    type: String,
    default: "user"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//DOCUMENT middleware
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

//craete model
const User = mongoose.model("User", userSchema);

//export User
module.exports = User;
