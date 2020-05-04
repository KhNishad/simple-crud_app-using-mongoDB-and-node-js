const mongoose = require('mongoose');

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