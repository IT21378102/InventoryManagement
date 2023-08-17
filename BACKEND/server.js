const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb connection successfully !");
});

const inventoryRouter = require("./routes/products");
const ExpProducts = require("./routes/expProducts");
const DomProducts = require("./routes/domProducts");

app.use("/inventory", inventoryRouter);
app.use("/expoproduct", ExpProducts);
app.use("/domproduct", DomProducts);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
