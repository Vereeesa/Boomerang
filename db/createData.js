const Leader = require('./models')

async function main() {
await Leader.create({
  name: ' ',
  scores: 100,
  position: 1,
})
}

main();