var bullet,wall;

var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,800);
  

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  

  bullet = createSprite(50, 200, 10, 10);
  bullet.velocityX = speed;
  bullet.shapeColor= color("black");

  wall = createSprite(1500,200,thickness,800);
  wall.shapeColor= color(80,80,80);


}

function draw() {
  
  background(255,255,255);  

 /* if (wall.x - car.x < car.width/2 +wall.width/2){
    car.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/ 22509;
    if (deformation>180){
  
      car.shapeColor = color(255,0,0);
  
    }
    if (deformation<180 && deformation>100){
  
      car.shapeColor = color(230,230,0);
  
    }
    if (deformation<100){
  
      car.shapecolor = color(0,255,0);
    }
  
  }
*/
if (hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness* thickness*thickness);

  if (damage>10){
    wall.shapeColor = color(255,0,0);
  }

  if (damage<10){
    wall.shapecolor = color(0,255,0);

  }
}    
  drawSprites();
}


function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
