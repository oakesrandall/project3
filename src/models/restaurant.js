module.exports = function(sequelize, Sequelize) {
  var model = sequelize.define("restaurant", {
    name: Sequelize.STRING,
    url: Sequelize.STRING,
    address: Sequelize.STRING
  });
  return model;
};
