require('./models/db');

const express  =  require('express');
const path = require('path');
const hbs = require('express-handlebars');
const BodyParser = require('body-parser');



const employeeController = require("./controllers/employeeController");

var app = express();
app.use(BodyParser.urlencoded({ extended: true }));


app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',hbs({extname:'hbs', defaultLayout:'mainlayout',layoutsDir: __dirname +'/views/layouts/'}))

app.listen(3000,()=>{
    console.log("Server running at port :3000");
    
});

app.use('/',employeeController);


