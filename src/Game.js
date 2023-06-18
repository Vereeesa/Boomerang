// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
// const Boomerang = require('./game-models/Boomerang');
const View = require("./View");
const Boomerang = require("./game-models/Boomerang");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang(trackLength);
    this.hero = new Hero({
      position: 0,
      position2: undefined,
      boomerang: this.boomerang,
    });
    this.enemy = new Enemy(trackLength);
    this.newEnemy = new Enemy(trackLength);
    this.view = new View(this);
    this.track = [];
    this.track2 = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin; // Добавьте эту строку
    
    if (this.hero.position >= 0) {
      this.track[this.hero.position] = this.hero.skin;
    }
    
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }

    this.track2 = new Array(this.trackLength).fill(" ");
    
    if (this.hero.position2 >= 0) {
      this.track[this.hero.position2] = this.hero.skin;
    }
    
    this.track2[this.newEnemy.position2] = this.newEnemy.skin

      if (
        this.hero.boomerang.position2 >= 0 &&
        this.hero.boomerang.position2 < this.trackLength
      ) {
        this.track2[this.hero.boomerang.position2] = this.hero.boomerang.skin;
      }
    }
  

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.hero.position2 === this.newEnemy.position2) {
      this.hero.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.handleCollisions();
      this.regenerateTrack();

      // Добавьте логику движения врагов, например, двигаться влево
      this.enemy.moveLeft();
      this.newEnemy.moveLeft();

      // Если враг достиг края трека, перемещаем его в начало
      if (this.enemy.position < 0) {
        this.enemy.position = this.trackLength - 1;
      }
      if (this.newEnemy.position2 < 0) {
        this.newEnemy.position2 = this.trackLength - 1;
      }

      this.view.render(this.track);
    }, 100); // Вы можете настроить частоту обновления игрового цикла
  }

  async handleCollisions() {
    if (
      (this.hero.position >= this.enemy.position &&
        this.hero.position - this.enemy.position < 1) ||
      (this.hero.position2 >= this.newEnemy.position2 &&
        this.hero.position2 - this.newEnemy.position2 < 1)
    ) {
      this.hero.die();
    }

    if (this.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      // Обнуляем позицию бумеранга после столкновения с врагом
      this.boomerang.position = undefined;
      this.enemy = new Enemy(this.trackLength); // Создаем нового врага
    }
    if (this.hero.position2 >= this.newEnemy.position2) {
      this.newEnemy.die();
      this.boomerang.position2 = undefined;
      this.newEnemy = new Enemy(this.trackLength);
    }
  }
}

module.exports = Game;
