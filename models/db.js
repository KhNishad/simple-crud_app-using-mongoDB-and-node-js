const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log("DB connected");

    }
    else {
        console.log("error db");

    }
})
require('./employee.model');


