var juego= new Phaser.Game(500,400,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var texto;
var style;

var estadoPrincipal={
	preload:function () {
	
	juego.load.image('fondo','img/bosque.png');
	juego.load.image('pajaro','img/pajaro1.png');
	juego.load.spritesheet('zeldas','img/personaje.png',64,64);

	},

	create:function(){
		fondoJuego = juego.add.tileSprite(0,0,500,400,'fondo');

		personaje =  juego.add.sprite(100,350,'zeldas');
		personaje.anchor.setTo(0.5);

		personaje.animations.add('derecha',[8,9,10,11],10,true);
		personaje.animations.add('izquierda',[4,5,6,7],10,true);
		personaje.animations.add('arriba',[12,13,14,15],10,true);
		personaje.animations.add('abajo',[0,1,2,3],10,true);

		juego.physics.arcade.enable(personaje);
		personaje.body.collideWorldBounds= true;

		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		juego.physics.startSystem(Phaser.Physics.ARCADE);

		texto = juego.add.text(0,380,"DIEGO ACHO",{font:"20px Arial", fill:"#ffffff", align:"center"});
	},

	update:function(){
		fondoJuego.tilePosition.x-=1;
		if(teclaDerecha.isDown){
			personaje.position.x+=2;
			personaje.animations.play('derecha');
		}else if(teclaIzquierda.isDown){
			personaje.position.x-=2;
			personaje.animations.play('izquierda');
		}
		else if (teclaArriba.isDown) {
			personaje.position.y-=2;
			personaje.animations.play('arriba');
		}
		else if (teclaAbajo.isDown) {
			personaje.position.y+=2;
			personaje.animations.play('abajo');
		}
	}

};

juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');

