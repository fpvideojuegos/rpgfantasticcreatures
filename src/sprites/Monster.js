import Enemy from './enemy.js';
import Meat from './meat.js';
import Potion from './potion.js';
import Jug from './jug.js';
import Heart from './heart.js';

export default class Monster extends Enemy {
	constructor(config) 
	{
		super(config);
		this.setFrame('monster');
		this.number
		this.health = 8;
		this.exclaimSound = this.scene.sound.add('demonExclaim');
		this.exclaimSound.setVolume(.2);
		this.deathSound = this.scene.sound.add('demonDeathSFX');
		this.deathSound.setVolume(.4);
		this.detectionDistance = 128;
		this.canFireball = true;
		// TEST SPEED SHOT - david 1
		this.speedShoot = 20000 // normal
	}




	detectBehavior()
	{
		if ((this.distanceToPlayerX > 32 || this.distanceToPlayerY > 32) && this.canFireball){
			this.canFireball = false;

			// Modify delay for speed shooter monster. - david 1
			this.scene.time.addEvent({ delay: this.speedShoot, callback: this.enableFireball, callbackScope: this });
	        let fireball = this.scene.enemyAttack.get();
	        if (fireball)
	        {
	        	fireball.fire(this.x, this.y);

	        }
	    } else {
	    	if (this.x > this.scene.player.x) {
	    		this.moveX = 'left';
	    	} else if (this.x < this.scene.player.x) {
	    		this.moveX = 'right';
	    	} else {
	    		this.moveX = 'none';
	    	}
	    	if (this.y > this.scene.player.y) {
	    		this.moveY = 'up';
	    	} else if (this.y < this.scene.player.y) {
	    		this.moveY = 'down';
	    	} else {
	    		this.moveY = 'none';
	    	}
	    }
	}

	enableFireball()
	{
		this.canFireball = true;
	}

	deathRegister()
	{
		this.scene.registry.set(`${this.scene.registry.get('load')}_Monster_${this.number}`, 'dead');
	}

	// heart,pirulet(meat),potion and jug when monster die. - david 1
	dropLoot() 
	{


			let heart = new Heart({
				scene: this.scene,
				x: this.x -10, 
				y: this.y -10,
				number: 0
			});
			this.scene.pickups.add(heart);
			this.dropSound.play();
		 
			let jug = new Jug({
				scene: this.scene,
				x: this.x +10, 
				y: this.y -10,
				number: 0
			});
			this.scene.pickups.add(jug);
			this.dropSound.play();
		
			let potion = new Potion({
				scene: this.scene,
				x: this.x, 
				y: this.y,
				number: 0
			});
			this.scene.pickups.add(potion);
			this.dropSound.play();
	
			let meat = new Meat({
				scene: this.scene,
				x: this.x -10, 
				y: this.y +10,
				number: 0
			});
			this.scene.pickups.add(meat);
			this.dropSound.play();
		
	}
}