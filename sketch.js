var monkey, monkeyImg;
var banana, bananaImg;
var jungle, jungleImg;
var stone, stoneImg;
var ground;
var score;

function preload(){
  monkeyImg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png",   "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  
  jungleImg = loadImage("jungle.jpg");
  
  stoneImg = loadImage("stone.png");
  
}


function setup() {
  createCanvas(800, 400);
  
  jungle = createSprite(0, 0, 800, 400);
  jungle.addImage(jungleImg);
  jungle.scale = 2;
  jungle.velocityX = -7;
  jungle.x=jungle.width/2;
  
  
  ground = createSprite(400,350,800,10);
  ground.velocityX = -7;
  ground.x= ground.width/2;

  monkey = createSprite(100, 340);
  monkey.addAnimation("running",monkeyImg);
  monkey.scale=0.2;
  
  
  
  ground.visible = false;
  
  
  
  
  bananaGroup = new Group;
  
  stoneGroup = new Group;

  score = 0;
  
  
}


function draw() {
  
  background(220);
  
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  if (jungle.x<0){
    jungle.x = jungle.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  
  createStones();
  createBananas();
  
  
  if(bananaGroup.isTouching(monkey)){
    score = score+2;
  }
  
  switch(score){
    case 10: monkey.scale = 0.12;
      break;
    case 20: monkey.scale = 0.14;
      break;
    case 30: monkey.scale = 0.16;
      break;
    case 40: monkey.scale = 0.18;
    default: break; 
  }
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:"+score,260, 50);  

}

function createStones(){
  
  if (frameCount%300===0){
   var stone = createSprite(400,random(300,350));
   stone.addImage("obstacle",stoneImg);
   stone.scale=0.15;
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

