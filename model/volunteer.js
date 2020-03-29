const mongoose = require("mongoose");

// Enforces a schema on Mongodb
// Prevents random errors
const atRiskUserSchema = mongoose.Schema(
  {
    uuid: String, // firebase id
    firstName: String,
    lastName: String,
    phone: String,
    address: String,
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TaskModel"
    }
  },
  { collection: "volunteer" }
);

// links the model to the schema
const volunteerUserModel = mongoose.model("VolunteerModel", atRiskUserSchema);

// Creates a user
createVolunteerUser = user => {
  return volunteerUserModel.create(user);
};

// Finds a user
findVolunteerUser = uuid => {
  return volunteerUserModel.findOne({ uuid });
};

// Updates a task
updateVolunteerUser = (userId, newUser) => {
  return taskModel.findOneAndUpdate(
    { _id: userId },
    { $set: newUser },
    { setDefaultsOnInsert: true, new: true }
  );
};

module.exports = {
  createVolunteerUser,
  findVolunteerUser,
  updateVolunteerUser
};
