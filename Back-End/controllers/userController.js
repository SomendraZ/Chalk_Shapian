const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

// get a single user
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }
  res.status(200).json(user);
};

// create a new user
const createUser = async (req, res) => {
  const { username, name, email, password } = req.body;

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // check if email already exists
  const existingUserEmail = await User.findOne({ email });
  if (existingUserEmail) {
    return res
      .status(409)
      .json({ error: "An account with this email address already exists" });
  }

  // check if username already exists
  const existingUserUsername = await User.findOne({ username });
  if (existingUserUsername) {
    return res
      .status(409)
      .json({ error: "An account with this username already exists" });
  }

  // add doc to db
  try {
    const user = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }
  const user = await User.findByIdAndDelete({ _id: id });
  if (!user) {
    return res.status(400).json({ error: "No such user" });
  }
  res.status(200).json(user);
};

// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }
  const user = await User.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!user) {
    return res.status(400).json({ error: "No such user" });
  }
  res.status(200).json(user);
};

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check if email exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // check if password is correct
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // generate JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  // login successful
  res.status(200).json({ user, token });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
};
