// Враг.

class Enemy {
  constructor(trackLength) {
    this.generateSkin();
    this.position = trackLength - 1;
    this.position2 = trackLength - 1;
  }

  generateSkin() {
    const skins = ['🧙', '🤕', '👹', '🤯', '🤺', '👮', '🧟',];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
    this.position2 -= 1;
  }

  die() {
   this.position = '?';
   this.position2 = '?';
  }
}

module.exports = Enemy;
