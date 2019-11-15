// express
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

//connect to database using mysqljs
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: 'mcsp02donuts'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// routes 
app.get('/', (req, res) => {
    res.send('Hello World!')
    //use mysqljs to run SQL queries to get data
    //res.send that data
});



//donut routes

//READ

//Create a donute
app.post('/donuts', (req, res) => {
    //get an object vie req.body
    res.send('POST request sent to homepage');
})

//Get all donuts
app.get('/donuts', (req, res) => {
    connection.query('SELECT * FROM donuts', function (error, results, fields) {
        if (error) {
            res.send('Something Went Wrong')
        }
        console.log('The solution is: ', results);
        res.send(results);
      });

})
//get a single donut
app.get('/donuts/:id', (req, res) => {
    res.send('a single donut');
})
//delete a donut

app.delete('/donuts/:id', (req, res) => {
    //req.body
    res.send('A single donut will be deleted');
})

//update a donut

app.patch('/donuts/:id', (req, res) => {
    //req.body
    res.send('Trying to update this donut');
})

//listens on a port
app.listen(port, () => console.log(`Listening on port: ${port}`));