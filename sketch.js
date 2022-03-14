var quadrado
function setup() {
  createCanvas(400,400);
  quadrado = createSprite(100, 100, 15, 15);
quadrado.shapeColor = "green";
}

function draw() 
{
  background(185);
drawSprites();

if(keyIsDown(RIGHT_ARROW)){
quadrado.x = quadrado.x + 5;
  
}
}




