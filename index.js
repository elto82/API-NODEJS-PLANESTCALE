import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import db from "./src/config/db.js";
import router from "./src/routes/index.js ";

const app = express();

app.use(express.json());
app.use(cors("*"));

app.use("/", router);
app.use("/*", (req, res) => {
  res.send("404 - not found");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("http://localhost:", port);
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});
