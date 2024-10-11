"use strict";

//import our dependencies
var express = require("express");

var app = express();

var mysql = require('mysql2');

var dotenv = require('dotenv'); //configure environment variables


dotenv.config(); //create aconnection obect

var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}); //Test the connection

db.connect(function (err) {
  //if the connection is not successful
  if (err) {
    return console.log("Error connecting to the database: ", err);
  } //if connection is succesful


  console.log("Successfully conected to MySQL: ", db.threadId);
}); //Question 1: Retrieve all patients

app.get('', function (req, res) {
  var getPatients = "SELECT * FROM patients";
  db.query(getPatients, function (err, data) {
    if (err) {
      return res.status(400).send("Faild to get patients", err);
    }

    res.status(200).send(data);
  });
}); //Question 2: Retrieve all providers

app.get('', function (req, res) {
  var getProviders = "SELECT * FROM providers";
  db.query(getProviders, function (err, data) {
    if (err) {
      return res.status(400).send("Faild to get providers", err);
    }

    res.status(200).send(data);
  });
}); //Question 3: Filter patients by First Name

app.get('', function (req, res) {
  var getPatients = "SELECT first_name FROM patients";
  db.query(getPatients, function (err, data) {
    if (err) {
      return res.status(400).send("Faild to get patients", err);
    }

    res.status(200).send(data);
  });
}); //Question 4: Retrieve all providers by their specialty

app.get('', function (req, res) {
  var getProviders = "SELECT specialty FROM providers";
  db.query(getProviders, function (err, data) {
    if (err) {
      return res.status(400).send("Faild to get providers", err);
    }

    res.status(200).send(data);
  });
}); //start and listen to the server

var PORT = 3000;
app.listen(PORT, function () {
  console.log("server is runnig on http://localhost:".concat(PORT));
});