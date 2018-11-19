/* eslint-disable prettier/prettier */
const express = require("express");
const app = express();
const models = require("./models");
const port = process.env.PORT || 3000;
const Sequelize = require('sequelize');

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server has been started on port ${port}...`);
});

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});



const hmessageHandler = (req, res) => {
  const currentTime = req.query.createAfter
  models.userMessages.findAll({
    where: {
      createdAt: {
        [Sequelize.Op.gt]: currentTime
      }
    }
  }).then(users => {
    res.header(`Content-type`, `aplication/json`);
    res.send(
      JSON.stringify(
        {
          messages: users,
          currentTime: currentTime
        })
    );
  });
}

const hmessageRequest = (req, res) => {
  const dbItem = {
    messages: req.body.messages,
    name: req.body.name,
    user_online: req.body.user_online
  };
  models.userMessages.create(dbItem).then(() => {
    res.header(`Content-type`, `aplication/json`);
    res.send(JSON.stringify({}));
  });
};

app.get("/api/messages", hmessageHandler);
app.post("/api/message", hmessageRequest);
