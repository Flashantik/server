import mongoose, { Schema } from "mongoose"


const refreshSchema = new mongoose.Schema({
  token:  {
     type: String
  },
  fingerprint: {
    type: String
  }
});

const UserSchema = new mongoose.Schema({
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
    },
    pages:{
      additional_materials: {},
      expirience: {},
      finance: {},
      hello: {},
      knowledge: {},
      objection: {},
      personal_meeting: {},
      script: {},
      strategy: {},
      test: {}
    },
    refresh: {
      type:[refreshSchema]
    }
  },{timestamps: true});


function arrayLimit(val) {
  return val.length <= 4;
}

module.exports = mongoose.model('User', UserSchema)