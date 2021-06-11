var hr,min,sec;
var sca,mna,hra

function setup() {
  createCanvas(windowWidth,windowHeight);
  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);
  
   
}

function draw() {
  background("pink");  
  fill(0);
  textSize(50);
  textStyle("bold");
  text("tick tock clock",windowWidth/2-150,50);
  translate(windowWidth/2,windowHeight/2)
  rotate (-90);
  
     hr = hour();
     min = minute();
     sec = second();
    
    strokeWeight(8);
    stroke("blue");
    noFill();
    let end = map(sec,0,60,0,360);
    arc(0,0,475,475,0,end);
    
    stroke("red");
    let end2 = map(min,0,60,0,360);
    arc(0,0,450,450,0,end2);
    
    stroke("green");
    let end3 = map(hr%12,0,12,-0,360);
    arc(0,0,425,425,0,end3);
    
    push();
    rotate(end);
    stroke("blue");
    line(0,0,200,0);
    pop();
    
    
    push();
    rotate(end2);
    stroke("red");
    line(0,0,175,0);
    pop();
    
    push();
    rotate(end3);
    stroke("green");
    line(0,0,125,0);
    pop();
    
    stroke("blue");
    point (0,0);

  

}