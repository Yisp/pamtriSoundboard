var buttons = [];
var sounds = [];

function Button(buttonName, buttonSound, x, y, w, h) {

	this.buttonName = buttonName;
	this.buttonSound = buttonSound;

	this.x = x;
	this.y = y;

	this.w = w;
	this.h = h;

	this.playSound = function() {

		this.buttonSound.play();

	}

	this.show = function() {

		fill(0, 255, 209);

		rectMode(CORNER);
		rect(this.x, this.y, this.w, this.h);

		fill(0);

		textAlign(CORNER);
		textSize(12);
		text(this.buttonName, this.x + 15, this.y + 20);

	}

}

function StopButton() {

	this.x = width - 120;
	this.y = height - 50;

	this.w = 105;
	this.h = 30;

	this.show = function() {

		fill(0, 255, 209);

		rectMode(CORNER);
		rect(this.x, this.y, this.w, this.h);
		
		fill(0);

		textAlign(CORNER);
		textSize(12);
		text("Stop Sounds", this.x + 15, this.y + 20);

	}

}

function preload() {

	img = loadImage("Images/background.jpg");

	sounds.push(loadSound("Sounds/santiago.mp3"));
	sounds.push(loadSound("Sounds/ohOkay.mp3"));
	sounds.push(loadSound("Sounds/barkOnATree.mp3"));
	sounds.push(loadSound("Sounds/moreSpongebobMore.mp3"));
	sounds.push(loadSound("Sounds/theHooksBoy-o.mp3"));
	sounds.push(loadSound("Sounds/noWitnesses.mp3"));
	sounds.push(loadSound("Sounds/triggered.mp3"));

}

function setup() {

	createCanvas(640, 360);

	imageMode(CENTER);
	image(img, width / 2, height / 2, width, height);

	stopButton = new StopButton();

	buttons.push(new Button("SAN TI AGO", sounds[0],
							10, 10, 100, 30));

	buttons.push(new Button("Oh, Okay...", sounds[1],
							buttons[0].x * 12, 10, 100, 30));
	
	buttons.push(new Button("Bark On A Tree", sounds[2],
							buttons[1].x * 2 - 10, 10, 117, 30));
	
	buttons.push(new Button("More Spongebob", sounds[3],
							buttons[2].x * 2 - 105, 10, 130, 30));

	buttons.push(new Button("The Hooks Boy-o", sounds[4],
							buttons[3].x * 2 - 215, 10, 130, 30));

	buttons.push(new Button("No Witnesses", sounds[5],
							buttons[0].x, 50, 110, 30));

	buttons.push(new Button("Triggered", sounds[6],
							buttons[1].x * 2 - 105, 50, 85, 30));

}

function draw() {


	for (var i = 0; i < buttons.length; i++) {

		buttons[i].show();

	}

	hit = collidePointRect(mouseX, mouseY,
						   stopButton.x, stopButton.y,
						   stopButton.w, stopButton.h);

		if (mouseIsPressed && hit) {

			for (var j = 0; j < buttons.length; j++) {

				if (buttons[j].buttonSound.isPlaying()) {

					buttons[j].buttonSound.stop();

				}

			}


		}

	stopButton.show();

}

function mousePressed() {

	var hit = false;

	for (var i = 0; i < buttons.length; i++) {

		hit = collidePointRect(mouseX, mouseY,
						  	   buttons[i].x, buttons[i].y,
						   	   buttons[i].w, buttons[i].h);

		if (hit) {

			buttons[i].playSound();

		}

	}

}
