// NPM Modules
var express = require('express');
var bodyParser = require('body-parser');

//Local Imports
var {mongoose} = require('./db/mongoose');

//Registering models and routes:

// User Model and Routes
var User = require('./models/User/user');
var userRoutes = require('./routes/userRoutes');
// Mail Verification Model and Routes


var app = express();

app.use(bodyParser.json());

// Routing 
userRoutes(app);


app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};



