const express = require("express");
const router = express.Router();
const conn = require("../db/db");
var prettyjson = require("prettyjson");

const userController = require("../controllers/userController");

router.get("/",  userController.findAll);
router.get("/:id", userController.findOne);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

router.get("/", (req, res) => {
  var rs = '';
  conn.query("Select * from tbl_lookup ", function (error, result) {
    if (error) {
      console.log("Error...!", error);
      rs = error;
    } else {
      console.log("Tasks : ", result);
      rs = result;
    }
  });

  res.send({ rs });
});


router.get("/list", (req, res) => {
  conn.query("select * from tbl_user_master ", function (error, result) {
    if (error) {
      res.send(JSON.stringify(error));
    } else {
      res.send(prettyjson.render(JSON.stringify(result)));
    }
  });
});

module.exports = router;