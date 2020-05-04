var express    = require('express');
var router     = express.Router();
const connection     = require("../db/db");

router.post('/application',function(req, res) {
    var jsondata = req.body;
    var values = [];
    var errors = [];

    for(var i=0; i< jsondata.length; i++)
       values.push([jsondata[i].name,jsondata[i].code,jsondata[i].type,jsondata[i].position]);

       connection.query('INSERT INTO tbl_lookup (name, code, type, position) VALUES ?', [values], function(err,result) {
        if(err) {
           res.send('There was an error occurred while inserting the value(s).');
        }
       else {
           res.send('Value(s) inserted successfully.');
        }
      });
});



//rest api to get all results
router.get('/employees', function (req, res) {
    connection.query('select * from employee', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
  
 //rest api to get a single employee data
 router.get('/employees/:id', function (req, res) {
    console.log(req);
    connection.query('select * from employee where id=?', [req.params.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
  
 //rest api to create a new record into mysql database
 router.post('/employees', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
  
 //rest api to update record into mysql database
 router.put('/employees', function (req, res) {
    connection.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
  
 //rest api to delete record from mysql database
 router.delete('/employees', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `employee` WHERE `id`=?', [req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });


router.get('/application',function(req, res, next) {
    console.log("Router level middleware with mount path");
    res.send("Router level middleware with mount path");
    next();
});

router.get('/application/:id',function(req, res, next) {
    req.displayid = req.params.id;
    if(req.params.id == 1) {
         next('route');
    } else {
        next()
    }
},function(req, res, next) {
    console.log("second route");
    res.send("second route");
    next()
},function(req, res, next) {
    console.log("third route");
    res.send("third route");
    next()
});

router.use(function(req, res, next){
    res.send(req.displayid);
});


router.use(function(err, req, res, next) {
   if(err) console.log(err);
});


module.exports = router;