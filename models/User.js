const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

//salt rounds
const SALT_ROUNDS = 6

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true, //checks if no one else is using the same email
      trim: true, //removes empty space from left and right
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
    isAdmin: { 
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    // Even though it's hashed - don't serialize the password
    toJSON: {
      //removes password from front end
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

//everytime a user is created or/and when the password is updated, the password gets hashed
userSchema.pre('save', async function(next) {
  // 'this' is the user doc //we check if password has been modified
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model("User", userSchema);
