const { Leader, sequelize } = require('../db/models');

async function saveInDB(name, scores) {
  await Leader.create({
    name,
    scores,
  });
}

module.exports = saveInDB;

// main();
// первая попытка получить данные
// const Game = require('.././src/Game')

// async function main() {
// await Leader.create({
//   name: `${Game.play().hero.name}`,
//   scores: `${game.handleCollisions()}`,
//   position: 10,
