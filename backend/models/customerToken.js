const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  _customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },

  token: {
    type: String,
    required: true,
  },

  tokenType: {
    type: String,
    enum: ["login"],
  },
});

const customerToken = mongoose.model("customerToken", tokenSchema);
module.exports = { customerToken };
