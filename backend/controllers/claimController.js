import User from "../models/User.js";
import ClaimHistory from "../models/ClaimHistory.js";

export const claimPoints = async (req, res) => {
  const { id } = req.params; // form url

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Assigning points out of 10
  const points = Math.floor(Math.random() * 10) + 1;
  user.totalPoints += points;
  await user.save();

  // Saving history
  const history = new ClaimHistory({ userId: user._id, points });
  await history.save();

  res.json({ message: "Points claimed successfully", user, points });
};

export const getClaimHistory = async (req, res) => {
  // Fetching history
  const history = await ClaimHistory.find()
    .populate("userId", "name")
    .sort("timestamp");

  res.json(history);
};
