const { Leader, sequelize } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up () {
    await Leader.create({
      name: 'Gamer',
      scores: 100,
      position: 10,
    })
  },

  async down () {
   await Leader.destroy();
  }
};
