//let xpos = 0;
//let ypos = 0;
let mindiam = 10;
let maxdiam = 20;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255,219,88);
  fill("black");

//small ellipse
for(xpos = 0; xpos<=windowWidth;xpos+=4*mindiam)
{
  for(ypos = 0; ypos<=windowHeight;ypos+=4*mindiam)
{ 
  ellipse(xpos,ypos,mindiam,mindiam);
}
}
//big ellipse
for(xpos = 0; xpos<=windowWidth;xpos+=4*maxdiam)
{
  if(xpos%2<=1)
  {
  for(ypos = 0; ypos<=windowHeight;ypos+=4*maxdiam)
{ 
  ellipse(xpos,ypos,maxdiam,maxdiam);
}
  }
  else
  {for(ypos = 20; ypos<=windowHeight;ypos+=2*maxdiam)
    { 
      ellipse(xpos,ypos,maxdiam,maxdiam);
    }
  }
}

}

