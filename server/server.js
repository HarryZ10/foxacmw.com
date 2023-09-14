require("dotenv").config("./.env");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var path = require("path");
const forceSsl = require("force-ssl-heroku");
// const { auth, requiresAuth } = require("express-openid-connect");
const app = express();

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.AUTH0_SECRET,
//   clientID: process.env.AUTH0_CLIENT_ID,
//   issuerBaseURL: process.env.AUTH0_DOMAIN,
//   baseURL: process.env.AUTH0_BASE_URL,
// };

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(require("./routes/navbar"));

// get driver connection
// const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  // dbo.connectToServer(function (err) {
  //   if (err) console.error(err);
  // });
  console.log(`Server is running on port: ${port}`);
});

// app.use(forceSsl);

// Use body-parser to parse HTTP request parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err); // To see properties of message in our console
  res.status(422).send({ error: err.message });
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
