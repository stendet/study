const express = require("express");
const app = express();
const models = require("./models");

app.listen(3000, () => {});

app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/api/messages", (req, res) => {
  models.userMessages.findAll({}).then(users => {
    res.header(`Content-type`, `aplication/json`);
    res.send(
      JSON.stringify({
        messages: users
      })
    );
  });
});

app.post("/api/message", (req, res) => {
  const dbItem = {
    messages: req.body.messages,
    name: req.body.name
  };
  models.userMessages.create(dbItem).then(() => {
    res.header(`Content-type`, `aplication/json`);
    res.send(JSON.stringify({}));
  });
});
