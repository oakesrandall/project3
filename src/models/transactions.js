module.exports = function(sequelize, Sequelize) {
  var model = sequelize.define("transactions", {
    userId: Sequelize.INTEGER,
    restaurantId: Sequelize.INTEGER,
    likes: Sequelize.INTEGER,
    trigger: Sequelize.BOOLEAN,
    favorite: Sequelize.BOOLEAN
  });

  return model;
};
