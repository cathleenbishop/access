var Webcam;
var bleepBloop;
var cams = []; // empty array to store the cams
var count = 100; //variable to store how many cams I want to make


function setup() {
  createCanvas (windowWidth, windowHeight);
  
  //this code plays the sound everytime the user clicks. change back after thacher
  bleepBloop = loadSound('assets/contact_available.m4a');
  
  //this code waits for the entire sound to play before it loads a new sound. for thacher show. delete.
  //bleepBloop = createAudio('assets/contact_available.m4a');
  
  
  //make new cams all at once
  // for (var bl = 0; bl<count; bl++){
  //   cams[bl] = new Webcam(random( width), random(height));
  // }
}
function draw() {
  background(0);
  fill(50, 200, 100);
  rect(width/3.2, height/2.4, height/1.57, height/14);
  textSize (height/12);
  textFont("Courier");
  fill(0);
  text("ALLOW ACCESS", width/3.1, height/2.1);
  
  //loop through the array
  for (var i=0; i<cams.length; i++) {
    cams[i].display();
  }
  
  Webcam(random(width),random(height));
  
}

function mousePressed() {
  
  //play sound when mouse pressed
  if (mouseX >=0 || mouseX <= width) {
    bleepBloop.play();
  }
  
  //make new cam on mouse pressed
  cams[cams.length]=new Webcam(mouseX, mouseY);
  //when go through, length is increased incrementally, go through display function. 
  //ask liat to better explain why need this?
  cams[cams.length-1].display();
  
}

function Webcam(_x, _y){
  
  this.x = _x;
  this.y = _y;
  
  this.display = function(){
    stroke(90, 90, 90);
    fill(12, -1, -7);
    ellipse(_x, _y, 40, 40); //big circle
    
    noStroke();
    fill(90, 90, 130, 255);
    x = map(mouseX, 0, width, _x-8, _x+8);
    y = map(mouseY, 0, height, _y-8, _y+8);
    ellipse(x, y, 25, 25); // small ellipse inside cam
    
    
    fill(70, 255, 86);
    ellipse(_x+40, _y, 20, 20); //green light
    
    fill(255, 255, 255, 100);
    ellipse(_x+40, _y, 10, 10); // white glare
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
