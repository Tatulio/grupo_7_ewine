var DataTypes = require('sequelize/lib/data-types');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey :true
              },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          anno: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          varietal:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          tipoVino:{
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          bodega: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          notasCata: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          maridaje: { 
            type: DataTypes.STRING,
            allowNull: false,      
          },
          price: { 
            type: DataTypes.STRING,
            allowNull: false,      
          },
          offert:{
            type: DataTypes.BOOLEAN,
          },
          destacado:{
            type: DataTypes.BOOLEAN,
          },
          recomendaciones:{
            type: DataTypes.BOOLEAN,
          },
          image: { 
            type: DataTypes.STRING,      
          }
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};