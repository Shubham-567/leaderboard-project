import mongoose from "mongoose";

// User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  totalPoints: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
