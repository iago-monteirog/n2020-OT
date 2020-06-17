'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('cursos', {
         id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
         },
         titulo: {
           type: Sequelize.STRING,
           allowNull: false,
         },
         link: {
           type: Sequelize.STRING,
           allowNull: false,
         },
         imagem: {
           type: Sequelize.TEXT,
           allowNull: false,
         }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('cursos');
  }
};
