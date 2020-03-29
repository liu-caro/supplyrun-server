const taskModel = require("../model/task");
const volunteerModel = require("../model/volunteer");

module.exports = app => {
  // Takes in a volunteer object
  createVolunteer = (req, res) => {
    const newUser = req.body;
    volunteerModel.createVolunteerUser(newUser).then(user => {
      res.send(user);
    });
  };

  // Takes in a task object
  createTask = (req, res) => {
    const newTask = req.body;
    taskModel.createTask(newTask).then(task => {
      res.send(task);
    });
  };

  findAllTasks = (req, res) => {
    taskModel.findAllTask().then(tasks => {
      res.send(tasks);
    });
  };

  // Take in VolunteerUUID and the Task ID
  bindTask = async (req, res) => {
    const data = req.body;
    const { volunteerUUID, taskId } = data;
    const volunteer = await volunteerModel.findVolunteerUser(volunteerUUID);
    const dbTask = await taskModel.findTask(taskId);
    volunteer.task = dbTask._id;
    dbTask.volunteer = volunteer._id;
    const updatedVolunteer = await volunteerModel.updateVolunteer(
      volunteer._id,
      volunteer
    );
    const updatedTask = await taskModel.updateTask(dbTask._id, dbTask);
    res.send({ updatedTask, updatedVolunteer });
  };

  // Take in a UUID from volunteer
  unbindTask = async (req, res) => {
    const { volunteerUUID } = req.body;
    const volunteer = await volunteerModel.findVolunteerUser(volunteerUUID);
    const dbTaskId = volunteer.task || "";
    if (!dbTask) {
      res.status(400).send({
        message: "There is no task"
      });
      return;
    }
    const dbTask = await taskModel.findTask(dbTaskId);
    volunteer.task = null;
    dbTask.volunteer = null;
    dbTask.completed = true;
    const updatedVolunteer = await volunteerModel.updateVolunteer(
      volunteer._id,
      volunteer
    );
    const updatedTask = await taskModel.updateTask(dbTask._id, dbTask);
    res.send({ updatedTask, updatedVolunteer });
  };

  app.post("/api/createVolunteer", createVolunteer);
  app.post("/api/createTask", createTask);
  app.post("/api/bindTask", bindTask);
  app.post("/api/unbindTask", unbindTask);
  app.get("/api/findAllTasks", findAllTasks);
};
