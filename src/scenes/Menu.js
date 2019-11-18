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
        var logo = this.add.sprite(400, 200, 'sprites', 'phaser3');
        var buttonStart = this.add.sprite(380, 400,'sprites','btn_play').setInteractive()
        .on('pointerdown', () => this.clickStart() );

        const buttonOne = this.add.text(250, 500, 'One Player', { fill: '#0f0' }).setInteractive()
        .on('pointerdown', () => this.playerOne() );
        const buttonTwo = this.add.text(410, 500, 'Two Player', { fill: '#0f0' }).setInteractive()
        .on('pointerdown', () => this.playerTwo() );
        this.player = false;
    }
	
	clickStart(){
        
        this.scene.start('bootGame');
        if(this.player){
            this.registry.set("numPlayer", 2);
            
        } else{
            this.registry.set("numPlayer", 1);
        }

    }

    playerOne(){
        this.player = false;
    }
    playerTwo(){
        this.player = true;
    }

};