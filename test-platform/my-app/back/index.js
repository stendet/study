var express = require("express");
var app = express();
const models = require("./models");

app.listen(3000, function() {});

// Add headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

app.get("/api/dreams", (req, res) => {
  models.Dream.findAll({}).then(users => {
    res.setHeader("Content-Type", "application/json");
    res.send(
      JSON.stringify({
        Dreams: users
      })
    );
  });
});
