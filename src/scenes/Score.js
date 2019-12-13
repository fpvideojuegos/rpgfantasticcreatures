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
        var buttonStart = this.add.sprite(50, 50,'sprites','atras').setInteractive()
        .on('pointerdown', () => this.clickMenu() );

        this.score = this.add.text(150, 100, "Score:", {
          fontFamily: 'Nueva Std',
          fontSize: '30px',
          fontStyle: 'Bold',
          color: '#fff',
          stroke: '#fff',
          strokeThickness: 0,
          align: 'left',  // 'left'|'center'|'right'|'justify'
          padding: {
              left: 1,
              right: 1,
              top: 1,
              bottom: 1,
          },
          maxLines: 0,
          lineSpacing: 0,
          fixedWidth: 0,
          fixedHeight: 0,
          rtl: false,
          wordWrap: {
              width: 400,
              callback: null,
              callbackScope: null,
              useAdvancedWrap: false
          },
        });
        this.text = "Level 1: Level 2: Level 3: Level 4: Level 5: ";
        this.level = this.add.text(170, 140, this.text, {
          fontFamily: 'Nueva Std',
          fontSize: '25px',
          fontStyle: 'Bold',
          color: '#fff',
          stroke: '#fff',
          strokeThickness: 0,
          align: 'left',  // 'left'|'center'|'right'|'justify'
          padding: {
              left: 1,
              right: 1,
              top: 1,
              bottom: 1,
          },
          maxLines: 0,
          lineSpacing: 0,
          fixedWidth: 0,
          fixedHeight: 0,
          rtl: false,
          wordWrap: {
              width: 100,
              callback: null,
              callbackScope: null,
              useAdvancedWrap: false
          },
        });
    }
	
	clickMenu(){
      this.scene.start('Menu');
    }

};