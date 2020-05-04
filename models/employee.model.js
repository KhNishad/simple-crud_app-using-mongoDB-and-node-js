const mongoose = require('mongoose');

// creating the schema

var employeeSchema = new mongoose.Schema({
   Name :{
       type:String,
     
   },
   Contact :{
       type : String
   },
   Address:{
       type: String
   }
});


mongoose.model('employees',employeeSchema);






// ///////////////////////////////////////////////////
// mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
//     if (!error) {
//         console.log("DB connected");

//     }
//     else {
//         console.log("error db");

//     }
// });