// Основной файл.
// Запускает игру.
const player = require('play-sound')((opts = {}));
const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

// Запуск игры.
game.play();
player.play('./src/sounds/дураков деревня 2.mp3');
runInteractiveConsole(game);
