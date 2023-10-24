import express from "express";
import {
  createUser,
  findOneUser,
  signUser,
  updateUser,
} from "../controller/userController";
import multer from "multer";

let upload = multer().single("avatar");

const router = express.Router();

router.route("/create-auth").post(upload, createUser);
router.route("/sign-in-auth").post(signUser);
router.route("/update-auth/:userID").patch(upload, updateUser);
router.route("/get-one-auth/:userID").get(findOneUser);

export default router;
