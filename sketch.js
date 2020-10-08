
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
monkey = createSprite(60,145,20,20);
monkey.addAnimation("moving",monkey_running);  
monkey.scale = 0.1;  
  
ground = createSprite(300,180,600,10);  
//ground.x = ground.width/2;
//ground.velocityX = -4;
//ground.x = ground.width/2;
console.log(ground.x);
  
  
  
  
  
  
}


function draw() {
background(200);
  
  spawnObstacles();
  spawnBanana();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,420,30);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:-"+survivalTime,30,30);
  
  
  
  
  
  drawSprites();
}

function spawnObstacles()  {
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,165,10,40);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
   obstacle.velocityX = -6 ;
    
    obstacle.lifetime = 300;
  }
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,100,10,40);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    
    banana.lifetime = 300;
  }
  
}


