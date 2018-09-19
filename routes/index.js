require('dotenv').config();
var fs = require("fs");
var path = require('path');
var request = require('request');
var textract = require('textract');
var sppull = require("sppull").sppull;
var Sendgrid = require("sendgrid-web");
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var https = require ('https');

var express = require('express');
var router = express.Router();

var phrasecount = 10;
var sendgridCredentials = [];

/* GET home page. */
router.get('/tasks', function(req, res, next) {
  var filename = req.query.filename;
  var filename = "mahesh_1.docx";
  var resumedetail = "", JDdetail = "";
  var resumekeyphrase, JDkeyphrase;
  console.log("inside main function phrasecount is ", phrasecount);
  res.send("HEllo new app");
  //res.render('index', { title: 'Express' });
});

module.exports = router;
