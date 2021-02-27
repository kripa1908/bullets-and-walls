var bullet,wall;

function setup() {
  createCanvas(800,400);
 wall= createSprite(700, 200, 50, 100);
  bullet=createSprite(50,200,50,50);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
  bullet.shapeColor="blue";
  wall.shapeColor="pink";
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
 if (damage>10){
   wall.shapeColor="red";
 }
 if (damage<10){
   wall.shapeColor="green";
 }
  }
  
  
  drawSprites();
}


function hasCollided(obj1,obj2){
  obj1RE=obj1.x+obj1.width;
  obj2LE=obj2.x;
  if(obj1RE>=obj2LE) {
    return true;
  }
   else{
     return false;
   }
}