var monkey, monkeyImg;
var banana, bananaImg;
var jungle, jungleImg;
var stone, stoneImg;
var ground


function preload(){
  monkeyImg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png",   "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  
  jungleImg = loadImage("jungle.jpg");
  
  stoneImg = loadImage("stone.png");
  
}


function setup() {
  createCanvas(600, 300);
  monkey = createSprite(200, 200);
  monkey.addAnimation("running",monkeyImg);
  monkey.scale=0.2;
  
  
  jungle = createSprite(200, 300, 600, 300);
  jungle.addImage(jungleImg);
  
  ground = createSprite(200,382,800,6);
  ground.velocityX = -7;
  ground.x= ground.width/2;
  
  bananaGroup = new Group;
  
  stoneGroup = new Group;

  
  
}


function draw() {
  
  background(220);
  stroke("black");
  textSize(20);
  fill("black")
  score= Math.ceil(frameCount/frameRate())
  text("Score:"+score,260, 50);
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(trex.collide())
  
  
  createRocks();
  createBananas();
  monkey.collide(ground);
  
  monkeyWeight();
  
  drawSprites();
    

}

function createRocks(){
  
  if (frameCount%300===0){
   var stone = createSprite(400,random(350,380));
   stone.addImage("obstacle",stoneImg);
   stone.scale=0.1;
   stone.velocityX = -6;
   stoneGroup.add = stone;
   stoneGroup.setLifetimeEach(65);
  }
}

function createBananas(){
   if (frameCount%80===0){
   var banana = createSprite(400,random(150,220));
   banana.scale=0.08;
   banana.addImage("food",bananaImg);
   banana.velocityX = -8;
   bananaGroup.add = banana;
   bananaGroup.lifetime = 50;
  }
}

function monkeyWeight(){
  
  if(monkey.collide(bananaGroup)){
    monkey.scale=monkey.scale+0.02;
  }
}