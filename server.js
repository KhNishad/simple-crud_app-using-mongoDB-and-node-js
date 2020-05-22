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

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running at port :3000");
    
});

app.get('/',(req,res)=>{
    res.render('employee/addEmployee.hbs');
})

app.use('/employee',employeeController);













//////////////////////////////////////////////////////////////////////////////////////////////////////////
// dependencies
// require('./models/db');

// const express = require('express');
// const path = require('path');
// const hbs = require('express-handlebars');
// const BodyParser = require('body-parser');



// const employeeController = require("./controllers/employeeController");

// var app = express();
// app.use(BodyParser.urlencoded({ extended: true }));