export default class Wise extends Phaser.GameObjects.Sprite {

  constructor(config) {
    super(config.scene, config.x, config.y, 'atlas', 'wise');
    config.scene.physics.world.enable(this);    
    this.scene = config.scene;
    this.number = config.number;
    this.body.moves = false;
    this.textbox = false;
    this.text = config.text;
    this.text1 = config.text;
    this.text2 = config.text;
    this.op1 = false;
    this.op2 = false;
    this.playerDetected = false;
    this.detectionDistance = 64;
    this.canDecide = true;    
    this.scene.add.existing(this);
    console.log(this.op1);

  }  
  wiseText() {    // console.log(this.textBox);  
    
    var text = this.scene.add.text(this.x -160, this.y - 100, this.text, {
      fontFamily: 'Courier',
      fontSize: '20px',
      fontStyle: '',
      backgroundColor: "#08a8b8",
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
      textalign: 'center',  // 'left'|'center'|'right'|'justify'
      padding: {
          left: 25,
          right: 25,
          top: 20,
          bottom: 2,
      },
      maxLines: 0,
      lineSpacing: 0,
      fixedWidth: 350,
      fixedHeight: 230,
      rtl: false,
      wordWrap: {
          width: 330,
          height:200,
          color:'#094e66',
          callback: null,
          callbackScope: null,
          useAdvancedWrap: false
      },
    });

    var text1 = this.scene.add.text(this.x -100, this.y +70, this.text1, {
      fontFamily: 'Courier',
      fontSize: '20px',
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
      align: 'center',  // 'left'|'center'|'right'|'justify'
      padding: {
          left: 2,
          right: 2,
          top: 2,
          bottom: 2,
      },
      maxLines: 0,
      lineSpacing: 0,
      fixedWidth: 100,
      fixedHeight: 20,
      rtl: false,
      wordWrap: {
        width: 100,
        height:10,
          callback: null,
          callbackScope: null,
          useAdvancedWrap: false
    },
    });
    var text2 = this.scene.add.text(this.x +25, this.y +70, this.text2, {
      fontFamily: 'Courier',
      fontSize: '20px',
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
      align: 'center',  // 'left'|'center'|'right'|'justify'
      padding: {
          left: 2,
          right: 2,
          top: 2,
          bottom: 2,
      },
      maxLines: 0,
      lineSpacing: 0,
      fixedWidth: 100,
      fixedHeight: 20,
      rtl: false,
      wordWrap: {
        width: 100,
        height:10,
          callback: null,
          callbackScope: null,
          useAdvancedWrap: false
    },
    });
    
    //const closeboton = this.scene.add.image(this.x, this.y - 40, 'atlas', 'exclamation');    
    
    text1.setInteractive().on('pointerdown', function () {
        console.log("ha dicho que e verda");
        console.log(scene.op1);
        console.log("Aki he llegado");

      let coins = this.scene.registry.get('coins_current');
      this.scene.registry.set('coins_current', coins + 1);
      this.scene.registry.set(`${this.scene.registry.get('load')}_Coins_${this.number}`, 'picked'); //register this object as collected with game so it is not added to future intances of this level
      this.scene.events.emit('coinChange');
      //console.log(coins);

      text.visible = false;
      text1.visible = false;
      text2.visible = false;
       
          }); 
       
    text2.setInteractive().on('pointerdown', () => {
        let coins = this.scene.registry.get('coins_current');
        this.scene.registry.set('coins_current', coins - 1);
        this.scene.registry.set(`${this.scene.registry.get('load')}_Coins_${this.number}`, 'picked'); //register this object as collected with game so it is not added to future intances of this level
        this.scene.events.emit('coinChange');
        text.visible = false;
        text2.visible = false; 
        text1.visible = false;                 
          });  
   
        }
  } 
