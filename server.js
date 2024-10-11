//import our dependencies
const express = require("express")
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv')

//configure environment variables
dotenv.config();

//create aconnection obect
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

//Test the connection
db.connect((err) => {
  //if the connection is not successful
  if(err) {
    return console.log("Error connecting to the database: ", err)
  }

  //if connection is succesful
  console.log("Successfully conected to MySQL: ", db.threadId)
})

//Question 1: Retrieve all patients
app.get('', (req, res) => {
  const getPatients = "SELECT * FROM patients"
  db.query(getPatients, (err, data) => {
    if(err) {
      return res.status(400).send("Faild to get patients", err)
    }

    res.status(200).send(data)
  })
})

//Question 2: Retrieve all providers
app.get('', (req, res) => {
  const getProviders = "SELECT * FROM providers"
  db.query(getProviders, (err, data) => {
    if(err) {
      return res.status(400).send("Faild to get providers", err)
    }

    res.status(200).send(data)
  })
})

//Question 3: Filter patients by First Name
app.get('', (req, res) => {
  const getPatients = "SELECT first_name FROM patients"
  db.query(getPatients, (err, data) => {
    if(err) {
      return res.status(400).send("Faild to get patients", err)
    }

    res.status(200).send(data)
  })
})

//Question 4: Retrieve all providers by their specialty
app.get('', (req, res) => {
  const getProviders = "SELECT specialty FROM providers"
  db.query(getProviders, (err, data) => {
    if(err) {
      return res.status(400).send("Faild to get providers", err)
    }

    res.status(200).send(data)
  })
})

//start and listen to the server
const PORT = 3000
   app.listen(PORT, () => {
     console.log(`server is runnig on http://localhost:${PORT}`)
   })