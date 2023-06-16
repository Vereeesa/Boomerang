// Наш герой.

class Hero {
  constructor({ position, boomerang }) {
    this.skin = '💃';
    this.position = position;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.position = this.position + 1; // Устанавливаем начальную позицию бумеранга
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DRUNK!🍻');
    process.exit();
  }
}

module.exports = Hero;
