'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weight = sequelize.define('Weight', {
    weight: DataTypes.DECIMAL,
    time: DataTypes.DATE
  }, {});
  Weight.associate = function(models) {
    Weight.belongsTo(models.User);
  };
  return Weight;
};