import Preload from './scenes/Preload.js';
import Level from './scenes/Level.js';
import Menu from './scenes/Menu.js';
import HUD from './scenes/HUD.js';
import GameOver from './scenes/gameOver.js';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-tilemap-pack',
    pixelArt: true,
    clearBeforeRender: false,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        width: 640,
        height: 360
    },
    physics: {
        default: 'arcade'
    },
    scene: [
    Preload,
    Menu,
    Level,
    HUD,
    GameOver
    ]
};

const game = new Phaser.Game(config);
