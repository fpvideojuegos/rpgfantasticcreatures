import Preload from './scenes/Preload.js';
import Level from './scenes/Level.js';
import Credits from './scenes/Credits.js';
import Score from './scenes/Score.js';
import Menu from './scenes/Menu.js';
import phaser_addons from './scenes/phaser_addon.js';
import HUD from './scenes/HUD.js';
import GameOver from './scenes/gameOver.js';
import SettingsLevel from '../settings.js';
import TG from '../TG.js';

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

    plugins: {
        global: [{
            key: 'TG',
            plugin: TG,
            mapping: 'TG',
            data: {
                path: './i18n',
                disponibleLangs: ['es', 'en'],
                fallbackLang: 'en',
                spanishLangs: ['ca', 'gl', 'es', 'eu']
            }
        }]
    },

    
    scene: [
    Preload,
    Menu,
    Score,
    Credits,
    SettingsLevel,
    Level,
    HUD,
    GameOver
    ]
};


const game = new Phaser.Game(config);