

let colorPal=('#f798a8',' #e6e6fa',' #f3dec3',' #fff6f1',  '#f5f5dc', '#21c21f', '#1900fd', '#141471', '#0c0c0c', '#c9e0fb');
let x,y;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);

  angle = 45;

  let randomNumber = floor (random(1, 100));
  console.log (randomNumber);
  
  x = random(width);
  y = random (height);
 
}
function draw() {
  // Set background to blue
  background(200,340,14);
  translate(width/2,height/2);



  rectMode(CENTER);
  rotate (frameCount*100);
  fill (255,30,130);
  circle (50,40,75);

  

  rotate (frameCount);
  fill (0);
  rect (40,30,100);

  
}