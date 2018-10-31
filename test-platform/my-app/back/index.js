var express = require("express");
var app = express();
const models = require("./models");

app.use(express.json());
app.listen(3000, () => {});

// Add headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
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

app.post("/api/dream", (req, res) => {
  const dbItem = {
    description: req.body.description,
    power: req.body.dreamPower,
    when: req.body.when,
    share: req.body.share === "yes" ? true : false
  };
  models.Dream.create(dbItem).then(() => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({}));
  });
});
