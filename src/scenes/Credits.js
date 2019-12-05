export default class Credits extends Phaser.Scene {
    constructor() 
    {
      super({
        key: 'Credits'
      });
    }

    preload(){
        
    }

    create(){
    // add logo
        this.cameras.main.setBackgroundColor(0xf6b349);
        var buttonStart = this.add.sprite(580, 50,'sprites','play').setInteractive()
        .on('pointerdown', () => this.clickMenu() );
        
        this.credit = this.add.text(50, 30, "Videojuego realizado por:", {
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
        this.textTwo = "Rosa Dominguez Barrientos Lorena Moyano Montes David Villena Gíl";
        this.text = "David Pérez Pardo Cintia García Ruiz Mercedes Perea Ropero";

        this.produced = this.add.text(70, 70, this.text, {
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
              width: 270,
              callback: null,
              callbackScope: null,
              useAdvancedWrap: false
          },
        });

        this.producedTwo = this.add.text(70, 145, this.textTwo, {
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
              width: 320,
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