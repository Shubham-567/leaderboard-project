import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const addUser = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = new User({ name });
  await newUser.save();

  res.status(201).json(newUser);
};
