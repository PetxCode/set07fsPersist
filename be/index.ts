import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { mainApp } from "./mainApp";

const url: string = "mongodb://127.0.0.1:27017/authData";
const port: number = 4455;
const app: Application = express();

app.use(cors());
app.use(express.json());

mainApp(app);

const server = app.listen(port, () => {
  console.log();
  mongoose.connect(url).then(() => {
    console.log("server connected");
  });
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException: ", error);
  process.exit(1);
});

process.on("unhandledRejection", (error: Error) => {
  console.log("unhandledRejection: ", error);

  server.close(() => {
    process.exit(1);
  });
});
