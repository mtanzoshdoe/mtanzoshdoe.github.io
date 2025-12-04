var radius = 120.0;
var radius2 = 155;
var angle = 0.0;
var angle2;
var x=0, y=0;
var x1, y1;
var n = 0;
var start;
var sliderVal;
var rotation = 0;
var cipher;
var input;
var button;
var type24;
var type32;
var type18;
var type16;
var type20;
var enterMsg = false;

var cipherCol = "#FF1744";
var plainCol = "#90ee02"

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function setup() {
  textAlign(CENTER);
  createCanvas(windowWidth,windowHeight);
  start = 0;

  slider = createSlider(0, 25, 13);
  slider.position(width/2 - height/3.74, height - height/4.5142857);
  slider.style('width', (height/1.9175) + "px");
  slider.input(updateCipher);

  input = createInput();
  input.position(width/2 - 8, height/4.2);
  input.size(height/15.34, height/25.567);
  input.value(0);

  button = createButton('Rotate');
  button.position(input.x + input.width + 10, height/4.4);
  button.size(height/9.5875, height/17); // height was = height/20.72972972972973
  button.mousePressed(rotateLetter);

  type32 = height / 24;
  type24 = height / 33;
  type18 = height / 44;
  type16 = height / 49;
  type20 = height / 40;

  radius = height/6.39166;
  radius2 = height/4.948387;

  butType = document.querySelector("button");
  inpType = document.querySelector("input[type='text']");

  butType.style.fontSize = type18 + "px";
  inpType.style.fontSize = type24 + "px";
}

function draw() {
  background(0);
  textSize(type32*1.4);
  textStyle(NORMAL);
  fill(255);

  text("Rotational Cipher", width/2, height/10.2266);
  textSize(type24);
  fill(150);
  text("Enter Key: ", width/2 - height/10.506849315068493, height/3.65238);

  if (enterMsg) {
    fill(cipherCol);
    textAlign(LEFT);
    text("Enter a positive number!", button.x + button.width + 20, height/3.65238);
    textAlign(CENTER);
  }

  sliderVal = slider.value();

  if (typeof cipher === "undefined") {
    cipher = sliderVal;
  }

  textSize(type24);
  fill(150);
  text("Use the slider to choose a plaintext letter: ", width/2, height - height/6.3916);
  text("Your ciphertext letter is: ", width/2, height - height/9.5875);

  textSize(type32);
  fill(plainCol);
  text(letters[sliderVal], width/2 + height/3.36170, height - height/6.3916);
  fill(cipherCol);
  text(letters[cipher % 26], width/2 + height/5.642857, height - height/9.5875);
  fill(255);
  if (cipher < rotation + sliderVal){
    cipher++;
  }


  textSize(type32);

  fill(cipherCol);
  text(letters[cipher % 26], width/2 - height/6.5, height/5.1133);
  fill(255);
  text(" ⬅ (", width/2 - height/10, height/5.1133);
  fill(plainCol);
  text(letters[sliderVal], width/2 - height/25, height/5.1133);
  fill(255);
  textAlign(LEFT);
  text(" + " + rotation + ") % 26", width/2 - height/39, height/5.1133);
  textAlign(CENTER);
  textSize(type24);

  text("ciphertext = (plaintext + key) % 26", width/2, height/6.9727);
  textStyle(NORMAL);
  push();
  translate(width/2, height/2 + height/38.35);
  stroke(255);
  fill(255);

  angle = TWO_PI * sliderVal/26 -1*PI/2;
  angle2 = TWO_PI * (cipher % 26)/26 -1*PI/2;

  x = cos(angle)* radius;
  y = sin(angle)* radius;
  x1 = cos(angle2)* radius;
  y1  = sin(angle2)* radius;


  fill(0);
  strokeWeight(height / 240);

  stroke(cipherCol);
  line(0,0,x1,y1);
  ellipse(x1,y1,height/25.4);

  stroke(plainCol);
  line(0,0,x,y);
  ellipse(x,y,height/25.4);

  fill("red");
  ellipse(0, 0, height/80);

  noStroke();
	textSize(type16);
	translate(0, height/127.833);
  fill(150);
  var angleOffset = -1*PI/2;
  for (var i=0; i<26; i++) {
    angle = 2*PI*i/26 + angleOffset;
    text(i, radius2*cos(angle), radius2*sin(angle));
  }

  stroke(255);
	strokeWeight(2);
  translate(0, 3);
  textSize(type24);
  noStroke();
  fill(255);
  for (i=0; i<26; i++) {
    angle = 2*PI*i/26 + angleOffset;
    text(letters[i], radius*cos(angle), radius*sin(angle));
  }

  pop();
}

function rotateLetter() {
  rotated = true;
  cipher = sliderVal;
  if (!input.value() || isNaN(input.value()) || input.value() < 0){
    rotation = 0;
    input.value(0);
    enterMsg = true;
  }
  else {
    enterMsg = false;
    rotation = parseInt(input.value());
  }
}

function updateCipher() {
  cipher = rotation + slider.value();
}
