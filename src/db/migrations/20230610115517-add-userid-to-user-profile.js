module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('UserProfiles', 'userId', {
        type: Sequelize.STRING,
        allowNull: false
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('food');
  }
};
