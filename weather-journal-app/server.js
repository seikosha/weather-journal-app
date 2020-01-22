// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, () => { console.log(`running on localhost : ${port}`) });

app.get('/all', function (req, res) {
    res.send(projectData);
});

app.post('/add', (req, res) => {
    let newData = [];
    // console.log(req.body);
    let newEntry =
    {
        temperature: req.body.temp,
        date: req.body.date,
        feeling: req.body.newFeeling,
    };
    projectData = newEntry;
    newData.push(newEntry);
});

// ---------------------------------------------------------------------------------------------------------------------
// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

// Start up an instance of app

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
