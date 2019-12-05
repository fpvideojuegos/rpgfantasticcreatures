export default class Score extends Phaser.Scene {
    constructor() 
    {
      super({
        key: 'Score'
      });
    }

    preload(){
        
    }

    create(){
    // add logo
        this.cameras.main.setBackgroundColor(0xf6b349);
        var buttonStart = this.add.sprite(580, 50,'sprites','play').setInteractive()
        .on('pointerdown', () => this.clickMenu() );
    }
	
	clickMenu(){
      this.scene.start('Menu');
    }

};