const mongoose = require('mongoose');
 mongoose.set('useFindAndModify', false);

// connecting database

mongoose.connect('mongodb+srv://admin:12345@nidcluster-msn3q.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log("DB connected");

    }
    else {
        console.log("error db");

    }
});
require('./employee.model');


// mongo atlas mongodb+srv://admin:<password>@nidcluster-msn3q.mongodb.net/test?retryWrites=true&w=majority













// 
// mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
//     if (!error) {
//         console.log("DB connected");

//     }
//     else {
//         console.log("error db");

//     }
// });


