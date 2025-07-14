import User from "../models/User.js";

export const getLeaderboard = async (req, res) => {
  const users = await User.find().sort({
    totalPoints: -1, // Sort by totalPoints in descending order (1 is ascending order)
  });

  // Mapping sorted users by totalPoints to create the leaderboard
  const leaderboard = users.map((user, index) => ({
    rank: index + 1,
    name: user.name,
    totalPoints: user.totalPoints,
  }));

  res.json(leaderboard);
};
