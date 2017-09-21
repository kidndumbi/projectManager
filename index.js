const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const dbConnect = require('./configs/mongoDb');
const app = express();
const user = require('./routes/user');

mongoose.connect(dbConnect.mongoURI);

mongoose.connection.on('connected', () => {
    console.log('i connected to ' + dbConnect.mongoURI  )
});

mongoose.connection.on('error', () => {
    console.log("error connecting");
});

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());


app.use('/crow',(req, res, next) => {
    res.send({id: 45})
});

app.use('/user', user);


const port = process.env.PORT || 5000;


app.listen(port, () => {

    console.log("Listening to port" + port)

});