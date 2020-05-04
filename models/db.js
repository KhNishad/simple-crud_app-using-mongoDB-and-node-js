const mongoose = require('mongoose');
 mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log("DB connected");

    }
    else {
        console.log("error db");

    }
})
require('./employee.model');


