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
        //var logo = this.add.sprite(400, 200, 'sprites', 'phaser3');
        var buttonStart = this.add.sprite(380, 400,'sprites','sprite1').setInteractive()
        .on('pointerdown', () => this.clickStart() );
    }
	
	clickStart(){
        
        this.scene.start('Level');

    }

};