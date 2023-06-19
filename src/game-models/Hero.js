// Наш герой.
const player = require("play-sound")((opts = {}));

class Hero {
  constructor({ position, boomerang, position2, liveCount = 3, scores = 0 }) {
    this.skin = "💃";
    this.position = position;
    this.position2 = position2;
    this.boomerang = boomerang;
    this.live = "Жизни: 🖤🖤🖤";
    this.liveCount = liveCount;
    this.scores = scores;
    this.name = "Player";
  }
  moveLeft() {
    // Идём влево.
    this.position > 0 ? (this.position -= 1) : null;
    this.position2 > 0 ? (this.position2 -= 1) : null;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.position2 += 1;
  }

  moveUp() {
    //  идем вверх
    if (this.position2 >= 0) {
      this.position = this.position2;
      this.position2 = undefined;
    }
  }

  moveDown() {
    // идем вниз
    if (this.position >= 0) {
      this.position2 = this.position;
      this.position = undefined;
    }
  }

  attack() {
    // Атакуем.
    if (this.position >= 0) {
      this.boomerang.position = this.position + 1; // Устанавливаем начальную позицию бумеранга
      this.boomerang.position2 = undefined;
    }
    if (this.position2 >= 0) {
      this.boomerang.position2 = this.position2 + 1;
      this.boomerang.position = undefined;
    }
    this.boomerang.fly();
    player.play("./src/sounds/Момент броска .wav");
  }

  die() {
    this.skin = "💀";
    console.log(`
    ██╗   ██╗ ██████╗ ██╗   ██╗     █████╗ ██████╗ ███████╗    ██████╗ ██████╗ ██╗   ██╗███╗   ██╗██╗  ██╗██╗
    ╚██╗ ██╔╝██╔═══██╗██║   ██║    ██╔══██╗██╔══██╗██╔════╝    ██╔══██╗██╔══██╗██║   ██║████╗  ██║██║ ██╔╝██║
     ╚████╔╝ ██║   ██║██║   ██║    ███████║██████╔╝█████╗      ██║  ██║██████╔╝██║   ██║██╔██╗ ██║█████╔╝ ██║
      ╚██╔╝  ██║   ██║██║   ██║    ██╔══██║██╔══██╗██╔══╝      ██║  ██║██╔══██╗██║   ██║██║╚██╗██║██╔═██╗ ╚═╝
       ██║   ╚██████╔╝╚██████╔╝    ██║  ██║██║  ██║███████╗    ██████╔╝██║  ██║╚██████╔╝██║ ╚████║██║  ██╗██╗
       ╚═╝    ╚═════╝  ╚═════╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝
       .
    ⠄⠄⡴⠶⠶⠶⠶⠶⠶⠶⠶⢶
    ⠄⢸⠇⠄⠄⠄⠄⠄⠄⠄⠄⠸⡇
    ⠄⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿
    ⢰⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡆
    ⢸⡁⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⢀⡇
    ⠘⣇⢻⣿⣿⣿⣿⣿⣿⣿⣿⡟⣸⠃
    ⠄⠙⣦⡛⢿⣿⣿⣿⣿⣿⢟⣴⠋
    ⠄⠄⠈⠙⠶⣬⣭⣭⣥⠶⠋⠁
    ⠄⠄⠄⠄⠄⠈⢿⡿⠁
    ⠄⠄⠄⠄⠄⠄⢸⡇
    ⠄⠄⠄⠄⠄⠄⢸⡇
    ⠄⠄⠄⠄⠄⠄⢸⡇
    ⠄⠄⠄⠄⠄⠄⢸⡇
    ⠄⠄⠄⠄⠄⣠⣿⣿⣄
    ⠄⠄⠄⠐⠾⠿⠿⠿⠿⠷⠆
                                                                                                             
    `);
    process.exit();
  }
}

module.exports = Hero;
