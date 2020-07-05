var player, playerImage;
var zombie1Group,zombie1Image,zombie2Group,zombie2Image,zombie3Group,zombie3Image,zombie4Group,zombie4Image;
var bg;

function preload() {
  playerImage  =  loadImage ("player.png")
  zombie1Image = loadImage ("zombie_1.png")
  zombie2Image = loadImage ("zombie_2.png")
  zombie3Image = loadImage ("zombie_3.png")
  zombie4Image = loadImage ("zombie_4.png")
            bg = loadImage("hauntedhous_bg.jpg")
}
function setup() {
createCanvas(1500,500);

player = createSprite(75,400,7,7);
player.addImage("player",playerImage);

player.scale = 0.3;
}

function draw() {
  background(bg);

  if(keyDown("UP_ARROW")){
  player.y=player.y-5;
  }

  if(keyDown("DOWN_ARROW")){
    player.y=player.y+5;
    }

    if(keyDown("RIGHT_ARROW")){
      player.x=player.x+5;
      }

      if(keyDown("LEFT_ARROW")){
        player.x=player.x-5;
        }
  
  drawSprites();
}