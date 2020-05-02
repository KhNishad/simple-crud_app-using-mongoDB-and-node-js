const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const employe = mongoose.model('employees');

router.get('/',(req,res)=>{
    res.render('employee/addEmployee.hbs');
});


router.post('/employee',(req,res)=>{
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
router.get('/employee/list', (req, res) => {
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

module.exports = router;