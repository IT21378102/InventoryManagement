const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const domProductSchema = new Schema({
  domProductName: {
    type: String,
    required: true,
  },
  domProductCode: {
    type: Number,
    required: true,
  },
  domProductQuentity: {
    type: Number,
    required: true,
  },
  domManDate: {
    type: Date,
    required: true,
  },
  domExpireDate: {
    type: Date,
    required: true,
  },
  domShipingAddress: {
    type: String,
    required: true,
  },
  domContactNumber: {
    type: Number,
    required: true,
  },
});

const DomProduct = mongoose.model("DomProduct", domProductSchema);

module.exports = DomProduct;
