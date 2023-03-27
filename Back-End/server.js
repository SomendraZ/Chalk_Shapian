require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to DB & listening to port XXXX");
    });
  })
  .catch((error) => {
    console.log(error);
  });
