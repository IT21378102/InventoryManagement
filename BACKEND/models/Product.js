const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productQuentity: {
    type: Number,
    required: true,
  },
  productDatePicker: {
    type: Date,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productCode: {
    type: Number,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productStokeNumber: {
    type: String,
    required: true,
  },
  proctImageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
