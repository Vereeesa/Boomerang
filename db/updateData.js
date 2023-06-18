const { Leader, sequelize } = require('./models/');

async function main() {
  await Leader.update({position: false}, {where: {}})
}

main();
