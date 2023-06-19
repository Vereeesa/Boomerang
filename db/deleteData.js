const { Leader, sequelize } = require('./models/');

async function main() {
  const gamer = await Leader.findOne({where: {name: 'Gamer'}});
  await gamer.destroy()
}

main();
