import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is empty"],
    },
    email: {
      type: String,
      required: [true, "Email is empty"],
    },
    password: {
      type: String,
      required: [true, "Password is empty"],
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
