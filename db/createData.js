const { Leader, sequelize } = require('./models')

async function main() {
await Leader.create({
  name: 'Bomzhara',
  scores: 100,
  position: 10,
})
}

main();