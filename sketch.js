//let xpos = 0;
//let ypos = 0;
let mindiam = 10;
let maxdiam = 20;
let x = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255,219,88);
  fill("black");

  //small ellipse
  for(xpos = 0; xpos<=windowWidth;xpos+=4*mindiam){
    for(ypos = 0; ypos<=windowHeight;ypos+=4*mindiam){ 
      ellipse(xpos,ypos,mindiam,mindiam);
    }
  }
  //big ellipse
  //for(xpos = 0; xpos<=windowWidth;xpos+=4*maxdiam){
    //if(xpos%2==0){
      //for(ypos = 0; ypos<=windowHeight;ypos+=4*maxdiam){ 
        //ellipse(xpos,ypos,maxdiam,maxdiam);
      //}
    //}
    //else{
    // for(xpos = 20; xpos<=windowHeight;xpos+=2*maxdiam){ 
      // ellipse(xpos,ypos,maxdiam,maxdiam);
      //}
    //}
  //}
  for(xpos = 0; xpos<=windowWidth;xpos+=2*maxdiam){
    if(x%2==0){
      x+=1;
      for(ypos = 0; ypos<=windowHeight;ypos+=4*maxdiam){ 
        ellipse(xpos,ypos,maxdiam,maxdiam);
      }
    }
    else{
      x+=1;
      for(ypos = 40; ypos<=windowHeight;ypos+=4*maxdiam){ 
        ellipse(xpos,ypos,maxdiam,maxdiam);
      }
    }
  }
}
