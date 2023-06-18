const { Leader, sequelize } = require('./models/');

async function main() {
  // const leaders = await Leader.findAll({
  //   order: [
  //     ['scores', 'DESC']
  //   ]
  // });
  const leaders = await sequelize.query('SELECT * FROM "Leaders"')
  console.log(leaders);
}

main();
