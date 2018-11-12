"use strict";
module.exports = (sequelize, DataTypes) => {
  const userMessages = sequelize.define(
    "userMessages",
    {
      messages: DataTypes.STRING,
      name: DataTypes.STRING
    },
    {}
  );
  userMessages.associate = function(models) {
    // associations can be defined here
  };
  return userMessages;
};
