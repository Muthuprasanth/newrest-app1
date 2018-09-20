require('dotenv').config();
var fs = require("fs");
var path = require('path');
var request = require('request');
var textract = require('textract');
var sppull = require("sppull").sppull;
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var https = require ('https');

var express = require('express');
var router = express.Router();

var phrasecount = 10;
var sendgridCredentials = [];

/* GET home page. */
router.get('/tasks', function(req, res, next) {
  //var filename = req.query.filename;
  var filename = "mahesh_1.docx";
  var resumedetail = "", JDdetail = "";
  var resumekeyphrase, JDkeyphrase;
  console.log("inside main function phrasecount is ", phrasecount);
  res.send("HEllo new app");
  let promiseTOGetsendgridCredentials = getSendgrid(res);
  promiseTOGetsendgridCredentials.then(function (Credentials) {
    sendgridCredentials[0] = Credentials[0];
    sendgridCredentials[1] = Credentials[1];
    res = Credentials[2];
    
    console.log("sendgridCredentials is", sendgridCredentials);
  }).catch(function (error) {
    console.log("Error in Getting sendgridCredentials is", error.message);
  });
});

function getSendgrid(res) {
  
  var config =
  {
    userName: 'Muthuprasanth038', // update me
    password: 'Sirius@25', // update me
    server: 'sendgridcredentials.database.windows.net', // update me
    options:
    {
      database: 'Sendusercred', //update me
      encrypt: true
    }
  }

  var connection = new Connection(config);
  
  var i = 0;
  return new Promise(function (resolve, reject) {
   connection.on('connect', function (err) {
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        let tediousRequest = new Request(
          "SELECT  username,sendkey FROM dbo.userdetails",
          function (err, rowCount, rows) {
            sendgridCredentials[2] = res;
            resolve(sendgridCredentials);
          }
        );
        tediousRequest.on('row', function (columns) {
          columns.forEach(function (column) {
            sendgridCredentials[i] = column.value;
            i++;
          });

        });
        connection.execSql(tediousRequest);
      }
    });
 
  });
}

module.exports = router;
