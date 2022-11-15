const Goal = require("../Models/goalModel.js");

const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addGoal = async (req, res) => {
  const { text } = req.body;
  const newGoal = new Goal({ text });
  try {
    await newGoal.save();
    res.status(200).json(newGoal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editGoal = async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  const updatedGoal = {
    text: text,
  };
  try {
    await Goal.findByIdAndUpdate(id, updatedGoal, { new: true });
    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteGoal = async (req, res) => {
  const { id } = req.params;
  try {
    await Goal.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: `Deleting goal with id : ${req.params.id}` });
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
