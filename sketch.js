var headers = [	'Dear Bubbado Cuties,',
				'Dear Bobes,',
				'Dear Cutiedos,',
				'Dear Princess,',
				'Dear Emily,'	]

var bodies = [	'Cuties I love you\nforever and I can’t\nwait until I get to\nsqueeze those rock\nhard nips again.',
				'I love you so so so\nso much and I can\'t\nwait to spend every\nsingle day with you\ncuties.',
				'You always make me\nsuper happy and I’m\nso lucky to have you.',
				'You’re a super cuties\nbubbas and you\nalways give me the\nbest kisses.',
				'I hope that my bobe\never leave me cause\nthen I’ll be lonely and\nnever be happy.',
				'I promise I’ll give you\na ton more hickeys\non your boobies\nbobiedos.',
				'You are so pretty\nbobes no one else\ncould ever compare.',
				'I love your rock hard\nnips so much bobies\nthey’re like two\nmount Everests.',
				'I know you love it\nwhen I spank the\nbooty so I always will\nbobies I promise.'	]

var closing = 'Love, Clemente'

var PSs = [	'P.S. I can’t wait to spank\nmy bobies booty every\nnight forever',
			'P.S. You\'re the best thing to ever\nhappen to me',
			' P.S. I can’t wait to spank my\nbobies booty every night forever',
			' P.S. I hope you like your\ngifts bobes!!',
			' P.S. I can always see those\nstiff peaks',
			'P.S. I love spankin’ that booty\nand I’ll never stop'	]


var exampleHeader = 'Dear Bubbado Cuties,'
var exampleBody = 'Cuties I love you\nforever and I can’t\nwait until I get to\nsqueeze those rock\nhard nips again.'
var exampleClosing = 'Love, Clemente'
var examplePS = 'P.S. I can’t wait to spank my\nbobies booty every\nnight forever'

var letterWidth,letterHeight;

function setup() {
	createCanvas(windowWidth,windowHeight*.95);

	chosenHeader = headers[Math.floor(random(0,headers.length))]
	chosenBody = bodies[Math.floor(random(0,bodies.length))]
	chosenPS = PSs[Math.floor(random(0,PSs.length))]

	paperFill = [random(150,250),random(150,250),random(150,250)]
	rectMode(CENTER);
}

function draw() {
  background(51);
  drawLetterPaper();
  writeLetter();
}

function drawLetterPaper() {
	if (width < height) {
		paperRatio = 11/8.5;

		letterWidth = width*.9;
		letterHeight = letterWidth * paperRatio;
	} else {
		paperRatio = 8.5/11;

		letterHeight = height-(height*.1);
		letterWidth = letterHeight * paperRatio;
	}

	noStroke();
	fill(30,30,30);
	rect(width/2+20,height/2+20,letterWidth,letterHeight);
	fill(paperFill[0],paperFill[1],paperFill[2]);
	rect(width/2,height/2,letterWidth,letterHeight);
}

function writeLetter() {
	letterLeft = (width/2)-(letterWidth/2);
	letterRight = (width/2)+(letterWidth/2);
	letterTop = (height/2)-(letterHeight*.45);
	letterBottom = (height/2)+(letterHeight/2);

	fill(0,0,0);
	noStroke();

	if (width < height) {
		textSize(width * (55/700));
		textAlign(LEFT,TOP);
		text(chosenHeader,letterLeft+(letterWidth * (20/1590)),letterTop+(letterHeight * (20/947)));

		textSize(width * (65/700));
		textAlign(LEFT,CENTER);
		text(chosenBody,letterLeft+(letterWidth * (20/1590)),(height/2)-(letterHeight * (80/947)));

		textSize(width * (55/700));
		textAlign(LEFT,BOTTOM);
		text(closing,letterLeft+(letterWidth * (20/1590)),height/2+letterHeight/4);

		textSize(width * (40/700));
		textAlign(LEFT,TOP);
		text(chosenPS,letterLeft+(letterWidth * (20/1590)),height/2+letterHeight/4);
	} else {
		textSize(height * (55/947));
		textAlign(LEFT,TOP);
		text(chosenHeader,letterLeft+(letterWidth * (20/1590)),letterTop+(letterHeight * (20/947)));

		textSize(height * (65/947));
		textAlign(LEFT,CENTER);
		text(chosenBody,letterLeft+(letterWidth * (20/1590)),(height/2)-(letterHeight * (80/947)));

		textSize(height * (55/947));
		textAlign(LEFT,BOTTOM);
		text(closing,letterLeft+(letterWidth * (20/1590)),height/2+letterHeight/4);

		textSize(height * (40/947));
		textAlign(LEFT,TOP);
		text(chosenPS,letterLeft+(letterWidth * (20/1590)),height/2+letterHeight/4);
	}
}
