let position;
let velocity;
let counter = 0;
let velSlider;
const c = 5;

function setup() {
  createCanvas(800, 400);
  position = createVector(width/2, 0);
  velocity = createVector(0 , 5);
  velSlider = createSlider(0, c, 0, 0);
}

function draw() {
  background(220);

  circle(position.x, position.y, 30);
  velocity.x = velSlider.value();
  velocity.setMag(c);
  position.add(velocity);
  edges();

  text("Velocity: " + 100 * round(velSlider.value()/c, 1) + "% c", 100, height-5);
  

  console.log(counter);
}

function edges() {
  if (position.x > width) {
    position.x = 0;
  } 
  else if (position.x < 0) {
    position.x = width;
  }
  else if (position.y > height) {
    velocity.y = velocity.y * -1;
    counter ++;
  }
  else if (position.y < 0) {
    velocity.y = velocity.y * -1;
    counter ++;
  }
}
