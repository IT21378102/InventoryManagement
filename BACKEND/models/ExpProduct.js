const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expProductSchema = new Schema({
  expProductName: {
    type: String,
    required: true,
  },
  expProductCode: {
    type: Number,
    required: true,
  },
  expProductQuentity: {
    type: Number,
    required: true,
  },
  expManDate: {
    type: Date,
    required: true,
  },
  expExpireDate: {
    type: Date,
    required: true,
  },
  expShipingAddress: {
    type: String,
    required: true,
  },
  expContactNumber: {
    type: Number,
    required: true,
  },
});

const ExpProduct = mongoose.model("ExpProduct", expProductSchema);

module.exports = ExpProduct;
