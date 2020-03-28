// var express = require('express')
// var app = express()
// var bodyParser = require('body-parser');

// //Website Link
// const WEBSITE_URL = "http://localhost:3000";

// // Connect to Mongo
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://tommysun10:<password>@lahacks2020-fl6nz.mongodb.net/test?retryWrites=true&w=majority');

// //Body Parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// //CORS Cross Origin
// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", WEBSITE_URL);
// 	res.header("Access-Control-Allow-Credentials", "true");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
// 	next();
// });


// //require('./services/user.service')(app);

// app.listen(process.env.PORT || 4000)

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 3000

app.get('/api', (req, res) => {
  res.status(200).json({api: 'version 1'})
})

app.listen(port, () => console.log('server started on port', port))
