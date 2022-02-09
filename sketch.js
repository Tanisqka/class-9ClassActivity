var box;
var edges;
function setup() {
  createCanvas(400, 400);
  box=createSprite(100,140,40,40)
  edges=createEdgeSprites()
}

function draw() {
  background(220);

if(keyDown("right")){
  box.position.x+=5;
}
if(keyDown("left")){
  box.position.x+=-5;
}
if(keyDown("up")){
  box.position.y+=-5;
}
if(keyDown("down")){
  box.position.y+=+5;
}
box.bounceOff(edges)

  drawSprites();
}