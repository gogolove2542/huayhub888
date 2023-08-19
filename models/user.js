import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required : true,
    },
    bank: {
      type: String,
      required : true,
    },
    accoutbank: {
      type: String,
      required : true,
    },
    createdAt: {
      type: String,
      required : true,
    }
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
