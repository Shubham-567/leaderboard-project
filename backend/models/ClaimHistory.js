import mongoose from "mongoose";

// ClaimHistory schema
const claimHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

const ClaimHistory = mongoose.model("ClaimHistory", claimHistorySchema);
export default ClaimHistory;
