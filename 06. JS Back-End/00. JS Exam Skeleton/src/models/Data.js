const { Schema, model, Types } = require("mongoose");

const dataSchema = new Schema({
  //TODO replace with data model from the exam description

  prop: {
    type: String,
    required: true,
  },
  author: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Data = model("Data", dataSchema);

module.exports = { Data };
