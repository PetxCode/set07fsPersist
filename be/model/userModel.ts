import mongoose from "mongoose";

interface iUser {
  email: string;
  password: string;
  userName: string;
  bio: string;
  avatar: string;
  avatarID: string;
}

interface iUserData extends iUser, mongoose.Document {}

const userModel = new mongoose.Schema<iUserData>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide an Email"],
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
    },
    bio: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<iUserData>("users", userModel);
