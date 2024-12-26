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
    dob: {
      type: String,

    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,

    },
    state: {
      type: String,

    },
    city: {
      type: String,

    },
    zipcode: {
      type: String,

    },
    address: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,

    },
    accountType: {
      type: String,

    },
    accountNumber: {
      type: String,

    },
    role: {
      type: String,
      default: 'user'

    },
    status: {
      type: String,
      default: 'pending'

    },
    password: {
      type: String,
      required: true,

    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
