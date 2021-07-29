var bg, busimg, bus;
var gameState="PLAY";
var boyimg
function preload(){
bg=loadImage("background.jpg");
busimg=loadImage("bus.png");
boyimg=loadImage("boy.png")
}
function setup() {
  createCanvas(1600,1050);
  //createSprite(400, 200, 50, 50);
 bus=createSprite(1100,900,50,50);
 bus.addImage(busimg); 
 bus.scale=0.2;
 bus.velocityX=-2;
 
 boy= createSprite(1460,900,50,50);
 boy.addImage(boyimg);
boy.scale=0.3; 
}

function draw() {
  background(bg);
   if(bus.x===50){
gameState="END";  
  } 
 






  drawSprites();

}