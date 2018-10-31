"use strict";
module.exports = (sequelize, DataTypes) => {
  const Dream = sequelize.define(
    "Dream",
    {
      description: DataTypes.STRING,
      power: DataTypes.INTEGER,
      when: DataTypes.STRING,
      share: DataTypes.BOOLEAN
    },
    {}
  );
  Dream.associate = function(models) {
    // associations can be defined here
  };
  return Dream;
};
