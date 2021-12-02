var normalBackGroundImg, INtenseBSC;
var Yamakazu, alien, GrandMaster, Spaceman, Part, UFO, Hello;
var Yamakazuimg, alienimg, GrandMasterimg, INtenseBGimg, Spacemanimg, Partimg, UFOimg, Helloimg, shootimg;
function preload()
{
	normalBackGroundImg = loadImage("assests/NormalBG.png");
	Yamakazuimg = loadImage("assests/Yamakazu.png");
  alienimg = loadImage("assests/alien.png");
  GrandMasterimg = loadImage("assests/GrandMaster.png");
  Partimg = loadImage("assests/part.png");
  INtenseBGimg = loadImage("assests/INtenseBSC.jpg");
  Spacemanimg = loadImage("assests/SPACEMAN.png");
  UFOimg = loadImage("assests/UFO.png");
  Helloimg = loadImage("assests/hello.png");
  shootimg = loadImage("assests/STOCKER.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight-20);

Yamakazu = createSprite(windowWidth/2,windowHeight/2,50,50);
Yamakazu.addImage("Yamakazuimg",Yamakazuimg);
Yamakazu.scale = 0.3;

Spaceman = createSprite(200, 200, 50, 50);
Spaceman.addImage("Spacemanimg",Spacemanimg);
Spaceman.scale = 0.3;

UFO = createSprite(300,300,40,50);
UFO.addImage("UFOimg",UFOimg);
UFO.scale = 1.2;

//Part = createSprite(240,30,20,20);
//Part.addImage("Partimg",Partimg);

//Hello = createSprite(304,340,30,40);
//Hello.addImage("Helloimg",Helloimg);

GrandMaster = createSprite(800,360,40,50);
GrandMaster.addImage("GrandMasterimg",GrandMasterimg);
GrandMaster.scale = 0.3;

alien = createSprite(150,100,40,40);
alien.addImage("alienimg",alienimg)
alien.scale = 0.4;
}


function draw() {
  rectMode(CENTER);
  background(normalBackGroundImg);

  if(keyDown("d")){
  Yamakazu.x = Yamakazu.x+1;
  }
  
  if(keyDown("a")){
    Yamakazu.x = Yamakazu.x-1;
  }

  if(keyDown("space")){
    Yamakazu.velocityY = -2;
  }
  Yamakazu.velocityY = Yamakazu.velocityY+0.3;

  if(frameCount%200 === 0){
    shoot = createSprite(alien.x,alien.y,30,30);
    shoot.addImage("shootimg",shootimg);
    shoot.scale = 0.2;
    shoot.velocityX = Yamakazu.velocityX+2
  }


  drawSprites();
}



