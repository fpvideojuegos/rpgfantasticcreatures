export default class Menu extends Phaser.Scene {
    constructor() 
    {
      super({
        key: 'Menu'
      });
    }

    preload(){
        
    }

    create(){
    // add logo
        var logo = this.add.sprite(300, 100, 'sprites', 'titulo');

       
        var buttonStart = this.add.sprite(150, 250,'sprites','core').setInteractive()
        .on('pointerdown', () => this.clickStart() );
        var buttonStart = this.add.sprite(310, 250,'sprites','play').setInteractive()
        .on('pointerdown', () => this.clickStart() );
        var buttonStart = this.add.sprite(460, 250,'sprites','credit').setInteractive()
        .on('pointerdown', () => this.clickStart() );
    }
	
	clickStart(){
        this.scene.launch('HUD'); //launch HUD
        this.scene.start('Level');

    }

};