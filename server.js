let express = require('express');
let app = express();
let path = require('path');
let helmet = require('helmet');
app.use(express.static(path.join(__dirname, ''))) //Serves static files from same directory
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(helmet());

let port = 5500;
// viewed at http://localhost:8080

app.post('/save-to-mongo', function(req, res) {
    // The data is now here
    res.send('Saved Data Successfully')
    console.log(req.body)
})

app.get('/read-from-db', function(req, res) {
    // The data from mongo 
    let sampleData = [
            {"name":"F", "age": 20}, 
            {"name":"f", "age": 21}, 
            {"name":"fdf", "age": 22},
            {"name":"fad", "age": 23},
            {"name":"asc", "age": 24}
        ]
    res.send({data: sampleData})
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen( port, () => {
    console.log(`Listening on Port: ${port}`)
});