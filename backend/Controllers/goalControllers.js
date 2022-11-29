const Goal = require("../Models/goalModel.js");
const User = require("../Models/userModel");

const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user._id });
    res.status(200).json(goals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addGoal = async (req, res) => {
  const { text } = req.body;
  console.log(`incoming ${text}`);
  const newGoal = new Goal({ text, user: req.user._id });
  try {
    await newGoal.save();
    const updatedGoals = await Goal.find({ user: req.user._id });
    res.status(200).json(updatedGoals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editGoal = async (req, res) => {
  console.log(req.body);
  const { text } = req.body;
  const { id } = req.params;

  const goalToUpdate = await Goal.findById(id);
  //console.log(goalToUpdate.user);
  const updatedGoal = {
    text: text,
    user: req.user._id,
  };

  //find the logged in user
  const user = await User.findById(req.user._id);
  //console.log(user);

  if (!user) {
    res.status(401).json({ message: "User not found" });
  }

  if (goalToUpdate.user.toString() !== user._id.toString()) {
    res.status(401).json({ message: "User not authorized" });
  }

  try {
    await Goal.findByIdAndUpdate(id, updatedGoal, { new: true });
    const updatedGoals = await Goal.find({ user: req.user._id });
    res.status(200).json(updatedGoals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteGoal = async (req, res) => {
  const { id } = req.params;

  const goalToDelete = await Goal.findById(id);

  //find the logged in user
  const user = await User.findById(req.user._id);
  //console.log(user);

  if (!user) {
    res.status(401).json({ message: "User not found" });
  }

  if (goalToDelete.user.toString() !== user._id.toString()) {
    res.status(401).json({ message: "User not authorized" });
  }
  try {
    await Goal.findByIdAndDelete(id);
    const updatedGoals = await Goal.find({ user: req.user._id });
    res.status(200).json(updatedGoals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getGoals,
  addGoal,
  editGoal,
  deleteGoal,
};
