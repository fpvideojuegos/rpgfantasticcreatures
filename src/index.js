import Preload from './scenes/Preload.js';
import Level from './scenes/Level.js';
import HUD from './scenes/HUD.js';
import GameOver from './scenes/gameOver.js';

document.body.style.cursor = 'none';    //remove cursor so we can replace it with our crosshair

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
    Level,
    HUD,
    GameOver
    ]
};


const game = new Phaser.Game(config);
