export default class Friend extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'atlas', 'friend', config.text);
    config.scene.physics.world.enable(this);

    this.scene = config.scene;
    this.number = config.number;
    this.body.moves = false;
    this.textbox = false;
    this.text =  config.text;
    this.playerDetected = false;
    this.detectionDistance = 64;
    this.canDecide = true;
    this.scene.add.existing(this)
  }

  friendTex() {
    var text = this.scene.add.text(this.x -55, this.y - 80, this.text, {
      fontFamily: 'Courier',
      fontSize: '11px',
      fontStyle: '',
      backgroundColor: "#FFC",
      color: '#000',
      stroke: '#fff',
      strokeThickness: 0,
      shadow: {
          offsetX: 0,
          offsetY: 0,
          color: '#000',
          blur: 0,
          stroke: false,
          fill: false
      },
      align: 'center',  
      padding: {
          left: 2,
          right: 2,
          top: 2,
          bottom: 2,
      },
      maxLines: 0,
      lineSpacing: 0,
      fixedWidth: 0,
      fixedHeight: 0,
      rtl: false,
      wordWrap: {
          width: 140,
          callback: null,
          callbackScope: null,
          useAdvancedWrap: false
      },
    });

    const closeboton = this.scene.add.image(this.x -55, this.y - 80, 'atlas', 'close');

    closeboton.setInteractive().on('pointerdown', () => {
      // Ocultamos los elementos y cambiamos la variable para que se vuelva a poder activar 
      closeboton.visible = false;
      text.visible = false;
      // this.textbox = false;

    });

  }

}