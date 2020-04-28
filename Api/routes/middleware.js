var express = require('express');
var router  = express.Router();

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