var hr,mn,sec
var secAngle,minAngle,hrAngle;
var secArc,minArc,hrArc
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sec = second();

  angleMode(DEGREES)
  secAngle = map(sec,0,60,0,360);
  minAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);

  push()
    translate(400,200)
    rotate(secAngle)
    stroke(255,0,0)
    strokeWeight(7)
    line(0,0,100,0)
    
    
  pop()

  push()
    translate(400,200)
    rotate(minAngle)
    stroke(0,255,0)
    strokeWeight(7)
    line(0,0,75,0)
  pop()

  push()
    translate(400,200)
    rotate(hrAngle%12)
    stroke(0,0,255)
    strokeWeight(7)
    line(0,0,75,0)
  pop()
  
  push()
    stroke(255,0,0)
    strokeWeight(7)
    line(0,0,100,0)
    noFill()
    arc(400,200,300,300,-90,secAngle)
  pop()

  push()
    stroke(0,255,0)
    strokeWeight(7)
    line(0,0,100,0)
    noFill()
    arc(400,200,290,290,-90,minAngle)
  pop()

  push()
    stroke(0,0,255)
    strokeWeight(7)
    line(0,0,100,0)
    noFill()
    arc(400,200,280,280,-90,hrAngle%12)
  pop()

  drawSprites();
  console.log(mouseX,mouseY)
}