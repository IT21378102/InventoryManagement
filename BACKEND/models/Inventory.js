const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
