var express    = require('express');
var router     = express.Router();
const conn     = require("../db/db");

router.post('/application',function(req, res) {
    var jsondata = req.body;
    var values = [];
    var errors = [];

    for(var i=0; i< jsondata.length; i++)
       values.push([jsondata[i].name,jsondata[i].code,jsondata[i].type,jsondata[i].position]);

    conn.query('INSERT INTO tbl_lookup (name, code, type, position) VALUES ?', [values], function(err,result) {
        if(err) {
           res.send('There was an error occurred while inserting the value(s).');
        }
       else {
           res.send('Value(s) inserted successfully.');
        }
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