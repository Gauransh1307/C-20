
var r = 0;
var g = 50;
var b=255;




function setup(){

  createCanvas(1200,400);
}


function draw(){

  
  r = mouseX/2;
  g = mouseX/3;
  b = (mouseX/4 + mouseY/4);

  background(r,g,b);

  fill(255);
  ellipse(mouseX,mouseY,40,40);

}