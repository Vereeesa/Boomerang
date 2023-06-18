// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(game) {
    this.game = game;
  }

  async render() {
    console.clear();

    const yourTeamName = "Vera's team";

    // Тут всё рисуем.
    console.log(
      `${this.game.hero.live}\nТекущий счет: ${this.game.hero.scores}\n`
    );
    console.log('\n\n')
    console.log(this.game.track.join(''));
    console.log('\n\n')
    console.log(this.game.track2.join('____'));
    console.log('\n\n');
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}


module.exports = View;
