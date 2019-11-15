// express
const express = require('express');
const app = express();
const port = 3000;

// routes 
app.get('/', (req, res) => res.send('Hello World!'));

//donut routes

//READ

//Create a donute
app.post('/donuts', (req, res) => {
    //get an object vie req.body
    res.send('POST request sent to homepage');
})

//Get all donuts
app.get('/donuts', (req, res) => {
    res.send('Sorry no donuts yet');
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