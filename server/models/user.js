import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: "Name is required",
    },
    email: {
      type: String,
      trim: true,
      require: "Email is required",
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
      max: 64,
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
