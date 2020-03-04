import mongoose, { Schema } from "mongoose"


var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true
    },
    disabledSidebar: {
      type: Array
    }
  },{timestamps: true});


module.exports = mongoose.model('User', UserSchema)