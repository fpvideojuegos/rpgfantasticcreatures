import GameConstants from "./gameConstants.js";

export default class SettingsLevel extends Phaser.Scene {
    constructor() {
        super({
            key: 'SettingsLevel'
        });
    }



    preload() {
        this.muted = false;
    }

    create() {
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        let x = width / 2;
        let y = height / 2 - 50;

        // background        
        this.cameras.main.setBackgroundColor(0xf6b349);

        var buttonStart = this.add.sprite(580, 50, 'sprites', 'atras').setInteractive()
            .on('pointerdown', () => this.clickMenu());

        const menuButton = this.add.dynamicBitmapText(80, 45, 'minecraft', '', 20);
        menuButton.setInteractive();

        //language - flags
        this.languageLabel = this.add.dynamicBitmapText(80, 150, 'minecraft', 'IDIOMA', 24).setTint(0xffffff);

        this.currentLanguage = this.TG.getActualLang();

        this.flag1 = this.add.image(100, 230, 'settings', 'en').setScale(1);
        this.flag1.setInteractive();
        this.flag2 = this.add.image(120, 230, 'settings', 'es').setScale(1);
        this.flag2.setInteractive();


        //sound
        //el sonido no se guarda porque no tenemos base de datos aún
        this.soundLabeltxt = this.add.dynamicBitmapText(80, 80, 'minecraft', 'SONIDO', 24).setTint(0xffffff);

        this.soundLabel = GameConstants.UI.VOLUMEON;

        this.musicOnOffButton = this.add.image(100, 120, 'settings', 'volumenON').setScale(0.4);
        this.musicOnOffButton.setInteractive();

        this.musicOnOffButton.on('pointerdown', () => {

            this.sound = !this.sound;

            if (!this.soundLabel) {
                this.sound.stopAll();
                this.musicOnOffButton.setTexture('settings', 'volumenOFF').setScale(0.4);
            this.musicOnOffButton.setInteractive();
            }

            this.soundLabel = (this.soundLabel.sound) ? GameConstants.UI.VOLUMEON : GameConstants.UI.VOLUMEOFF;
            this.musicOnOffButton.setTexture('settings', 'volumenOFF').setScale(0.4);
            this.musicOnOffButton.setInteractive();

            this.musicOnOffButton.on('pointerdown' , () => {
                this.musicOnOffButton.setTexture('settings' , 'volumenON').setScale(0.4);
            });
        });

    }

    update(time, delta) {

    }

    setFlagsSetting(flag, language) {
        flag.setInteractive();
        flag.on('pointerdown', () => {
            this.TG.setLang(language);
        });
        if (this.currentLanguage === language) {
            this.add.rectangle(flag.x - 3, flag.y - 3, flag.width + 3, flag.height + 3, 0xff0000).setOrigin(0).setScale(2).setDepth(0);
        }
    }


    clickMenu() {
        this.scene.start('Menu');
    }

}
