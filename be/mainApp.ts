import { Application, Request, Response } from "express";
import auth from "./router/router";
import fs from "fs";
import path from "path";
import lodash from "lodash";

export const mainApp = (app: Application) => {
  app.use("/api", auth);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(202).json({
        message: "Awesome API",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  });

  app.get("/read", (req: Request, res: Response) => {
    try {
      const myPath = path.join(__dirname, "data", "./database.json");
      fs.readFile(myPath, (err, resp) => {
        if (err) {
          return err;
        } else {
          const file = JSON.parse(Buffer.from(resp).toString());

          return res.status(202).json({
            message: "Awesome API",
            data: file,
          });
        }
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  });

  app.post("/data", (req: Request, res: Response) => {
    try {
      const { data } = req.body;
      const myPath = path.join(__dirname, "data", "./database.json");

      fs.readFile(myPath, (err, resp) => {
        if (err) {
          return err;
        } else {
          const file = JSON.parse(Buffer.from(resp).toString());

          if (lodash.some(file, data)) {
            return res.status(202).json({
              message: "Awesome API",
              data: file,
            });
          } else {
            file.push(data);

            fs.writeFile(myPath, JSON.stringify(file), () => {
              console.log("completed");
            });
          }
          return res.status(202).json({
            message: "Awesome API",
            data: file,
          });
        }
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  });
};
