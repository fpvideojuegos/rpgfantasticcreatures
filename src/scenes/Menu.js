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
        this.cameras.main.setBackgroundColor(0xf6b349);
        var logo = this.add.sprite(315, 100, 'sprites', 'titulo');
        this.btnscore = this.addButton(150, 250, 'sprites', this.clickScore, this, 'core','core','core','core');
        this.btncredits = this.addButton(460, 250, 'sprites', this.clickCredits, this, 'credit', 'credit','credit',
        'credit', 'credit','credit');
        this.btnstart = this.addButton(310, 250, 'sprites', this.clickStart, this, 'play', 'play1','play2',
        'play', 'play1','play2');

    }
	
	clickStart(){
      this.scene.launch('HUD'); //launch HUD
      this.scene.start('Level');
  }

  clickScore(){
      this.scene.start('Score');
  }

  clickCredits(){
      this.scene.start('Credits');
  }

};