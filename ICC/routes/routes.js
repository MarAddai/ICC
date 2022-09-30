// //import data model
// const Model = require("../models/model");

// //import express
// const express = require("express");

// const router = express.Router();

// //Post Method (needs to be async to work)
// router.post("/post", async (req, res) => {
//   //create the body so we can post using the data model/dataSchema we created in model.js
//   const data = new Model({
//     name: req.body.name,
//     age: req.body.age,
//   });

//   //wrap the attempt at saving of posted data in a try catch block to gracefully handle any exceptions that occur
//   try {
//     const dataToSave = await data.save();
//     res.status(200).json(dataToSave);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
const express = require("express");
const Model = require("../models/model");
const router = express.Router();


//START OF TOKEN
const jwt = require('jsonwebtoken');
require('crypto').randomBytes(64).toString('hex') 


const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}
//END OF TOKEN 

//authenticate token funtion 
// const jwt = require('jsonwebtoken');

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]

//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.TOKEN_SECRET => {
//     console.log(err)

//     if (err) return res.sendStatus(403)

//     req.user = user

//     next()
//   })
// }

//end of authenticate token function


//Post Method - ICC specific
//(needs to be async to work)
router.post("/message", async (req, res) => {
  //create the body so we can post using the data model/dataSchema we created in model.js
  const data = new Model({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
    
  });

  const token = generateAccessToken({ username: req.body.username });

  try {
    const dataToSave = await data.save();
    res.status(200).json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// General Rest API methods below

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
