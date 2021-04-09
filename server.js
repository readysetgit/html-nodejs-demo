let express = require('express');
let app = express();
let path = require('path');
let helmet = require('helmet');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

let port = 4200;
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/save-to-mongo', function(req, res) {
    // The data is now here
    console.log(req.body)
})

app.listen( port, () => {
    console.log(`Listening on Port: ${port}`)
});