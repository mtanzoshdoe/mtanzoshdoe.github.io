let bubbleSize = 20;

let bubbles = [];

function setup() {
  let cnv = createCanvas(500,400);
  cnv.parent("myDiv");
  for (let i = 0; i < 100; i++) {
    let bubble = {
      x: random(width),
      y: random(height)
    }
    bubbles.push(bubble);
  }
}

function draw() {
  background(0);
  fill(250);

  for (let bubble of bubbles) {
    circle(bubble.x, bubble.y, bubbleSize);
    bubble.x += random(-2, 2);
    bubble.y += random(-2, 2);
  }
}
