const express = require('express');
const app = express();
const path = require('path');
const auth = require('./routes/auth');
const request = require("request");
require('dotenv').config()

//map the public content
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use('/auth', auth);

const port = process.env.PORT || 4600;
app.listen(port, (req, res)=>{
    console.log(`RUNNING on port ${port}`);
});