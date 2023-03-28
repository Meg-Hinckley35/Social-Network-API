const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: {
      type: Array,
      required: true,
      max_length: 500,
    },
    friends: {
      type: Array,
      required: true,
      max_length: 50,  
    },
    users: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Users = model('user', userSchema);

module.exports = Users;
