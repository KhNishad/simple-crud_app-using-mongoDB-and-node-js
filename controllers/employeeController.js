const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

// creating a model of the collections of the database

const employe = mongoose.model('employees');

// rendering the home page for employee controller

router.get('/',(req,res)=>{
    res.render('employee/addEmployee.hbs');
});

// geting the post method from handlebar page

router.post('/',(req,res)=>{ 
    if(req.body._id)
    {
      // console.log(req.body);
       
        updateRecord(req, res);
        
    }else{
        insert(req, res);
       
    }

});

// function for inserting data from add employee form to database
function insert(req, res) {
    var employee = new employe();
    employee.Name = req.body.name;
    employee.Contact = req.body.contact;
    employee.Address = req.body.address;
    //console.log(req.body.name);

    employee.save((err, docs) => {
        if (!err) {
            res.redirect('employee/list');
        } else {
            console.log(err);
        }
    });
}

// update function
function updateRecord(req, res) {
   
    employe.findOneAndUpdate({ _id: req.body._id }, { $set: { Name: req.body.name, Contact: req.body.contact, Address:req.body.address}}, { returnOriginal: false }  , (err,doc)=>{

        if(!err){
            
           
            res.redirect('employee/list');
        }
        else{
            res.send(err);
        }
    });
}


// retriving data from database and sending in the table
router.get('/list', (req, res) => {
    employe.find((err, docs) => {
        if (!err) {

            res.render("employee/list.hbs", {
                list: docs
            });
        } else {
            res.send(err);

        }
    }).lean();

});

// sending data from database to hbs pages for edit 

router.get('/:id', (req, res) => {
    employe.findById(req.params.id , (err,docs)=>{
        if(!err){
            //console.log(docs);
            
            res.render('employee/addEmployee.hbs', { viewTitle :"Update" , employee: docs})
        }
        else{
            console.log("error in find by id");
            
        }
    }).lean();
});


// delete record
router.get('/delete/:id', (req, res) => {
    employe.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.redirect('/employee/list');
        }else{
            res.send(err);
        }
    })
    
});

module.exports = router;


///////////////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// var router = express.Router();

// const mongoose = require('mongoose');

// // creating a model of the collections of the database

// const employe = mongoose.model('employees');


