module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tipo_vino', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tipo_vino');
  }
};