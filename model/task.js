const mongoose = require("mongoose");

// Enforces a schema on Mongodb
// Prevents random errors
const taskSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    phone: String,
    address: String,
    lat: String,
    long: String,
    request: String,
    completed: Boolean,
    volunteer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VolunteerModel"
    }
  },
  { collection: "task" }
);

// links the model to the schema
const taskModel = mongoose.model("TaskModel", taskSchema);

// Creates a task
createTask = task => {
  return taskModel.create(task);
};

// Finds a task
findAllTask = () => {
  return taskModel.find();
};

findTask = id => {
  return taskModel.find({ _id: id });
};

// Updates a task
updateTask = (taskId, newTask) => {
  return taskModel.findOneAndUpdate(
    { _id: taskId },
    { $set: newTask },
    { setDefaultsOnInsert: true, new: true }
  );
};

module.exports = {
  findAllTask,
  findTask,
  updateTask
};
