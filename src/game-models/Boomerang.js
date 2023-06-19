// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(trackLength) {
    this.position = undefined;
    this.position2 = undefined;
    this.trackLength = trackLength;
    this.skin = "🍾";
    this.generateSkinAlco();
  }

  generateSkinAlco() {
    const skinsAlco = ["🍾", "🍺", "🥃", "🍷", "🍸"];
    this.skin = skinsAlco[Math.floor(Math.random() * skinsAlco.length)];
  }

  fly() {
    const distance = 9; // Устанавливаем дистанцию полета бумеранга

    // Запускаем бумеранг на заданное расстояние
    for (let i = 1; i <= distance; i++) {
      setTimeout(() => this.moveRight(1), 50 * i);
    }

    // Возвращаем бумеранг на заданное расстояние
    for (let i = 1; i <= distance; i++) {
      setTimeout(() => this.moveLeft(1), 25 * (distance + i));
    }

    // Сбрасываем позицию бумеранга после возвращения
    setTimeout(() => this.reset(), 50 * (distance * 2));
  }

  reset() {
    this.position = undefined; // Сброс позиции бумеранга
    this.position2 = undefined;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
    this.position2 -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.position2 += 1;
  }
}

module.exports = Boomerang;
