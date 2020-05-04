const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const employe = mongoose.model('employees');

router.get('/',(req,res)=>{
    res.render('employee/addEmployee.hbs');
});


router.post('/',(req,res)=>{
insert(req,res);
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

module.exports = router;