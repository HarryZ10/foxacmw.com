const express = require("express");

// navbarRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /navbar.
const navbarRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the navbars.
navbarRoutes.route("/navbar").get(function (req, res) {
  let db_connect = dbo.getDb("navbar");
  db_connect
    .collection("navbar")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single navbar by id
// navbarRoutes.route("/navbar/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect.collection("navbar").findOne(myquery, function (err, result) {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// This section will help you create a new navbar.
// navbarRoutes.route("/navbar/add").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myobj = {
//     item: req.body.item,
//     link: req.body.link,
//   };
//   db_connect.collection("navbar").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });

module.exports = navbarRoutes;
