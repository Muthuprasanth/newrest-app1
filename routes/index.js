require('dotenv').config();
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tasks', function(req, res, next) {
  res.send("HEllo new app");
  //res.render('index', { title: 'Express' });
});

module.exports = router;
