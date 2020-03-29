var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;

// //Website Link
// const WEBSITE_URL = "http://localhost:3000";

// Connect to Mongo
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://tommysun10:3fFt0zMZojw2DsEw@lahacks2020-fl6nz.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS Cross Origin
app.use(cors());

require("./services/tasks")(app);

app.listen(port, () => console.log("server started on port", port));
