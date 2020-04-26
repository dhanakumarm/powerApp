
const express = require("express");
const router = express.Router();
const conn = require("../db/db");
router.get("/", (req, res) => {
 var rs = '';
    conn.query("Select * from tbl_lookup ", function(error, result) {
        if (error) {
          console.log("Error...!", error);
          rs = error;
        } else {
          console.log("Tasks : ", result);
          rs = result;
        }
      });

    res.send({rs});
});

module.exports = router;