var ball, ground, player, player1,player2, player02, ball0;
var gameState="start"
var score1=0, score2=0

function preload() {
ball= loadImage("tennis ball.png")  
ground= loadImage("tennis court.png")
player= loadImage("tennis player.png")
player02= loadImage("player2.png")
}

function setup() {
  canvas = createCanvas(displayWidth, windowHeight); 
  player1= createSprite(200,450)
  player1.addImage(player)
  player1.scale=0.5
  player2= createSprite(1300,450)
  player2.addImage(player02)
  player2.scale=0.5
  ball0= createSprite(windowWidth/2,windowHeight/2)
  ball0.addImage(ball)
  ball0.scale=0.1
  ground1=createSprite(750,windowHeight-60,1500,5)
  ground1.visible=false
  ground2=createSprite(750, windowHeight-500, 1500,5)
  ground2.visible=false
 
}

function draw() {
  background("white")
  image(ground,-10,-10,windowWidth, windowHeight)
  drawSprites()
  if(gameState=="start"){
    textSize(20)
    fill ("black")
    text ("Press Spacebar to start",windowWidth/2-150, windowHeight/2-20)
  }
  if (keyIsDown(32)&&gameState=="start"){
    ball0.velocityX=5
    ball0.velocityY=1
    gameState="play"
  }
  if(gameState=="play"){
     ball0.bounceOff(player2)
     ball0.bounceOff(player1)
     ball0.bounceOff(ground1)
     ball0.bounceOff(ground2)
    
     player1.y=ball0.y
     textSize(30)
  text (score1, 300, 75)
  text (score2, 1200, 75)
    if(ball0.x<0){
      score2=score2+5
      reset()
    }
    if (ball0.x>1600){
      score1=score1+5
      reset()
    }
   

 if(keyIsDown(LEFT_ARROW)&&player2.x>1100){
   player2.x=player2.x-9
  }
  
  if(keyIsDown(RIGHT_ARROW)&&player2.x<1500){
    player2.x=player2.x+9
  }
  if(keyIsDown(UP_ARROW)&&player2.y>400){
    player2.y=player2.y-9
  }
  if(keyIsDown(DOWN_ARROW)&&player2.y<1500){
    player2.y=player2.y+9
  }
}
if(score1==10||score2==10){
  gameState="end"
  textSize(30)
  fill("black")
 // gameOver()
  swal({
    title: `Game Over`,
    text: "Oops you lost....!!!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Restart"
  }, 
  function (isConfirm){
    if(isConfirm){
      location.reload()
    }
  });
  //text("Game Over",windowWidth/2-150, windowHeight/2-20 )
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function reset(){
  gameState="start"
  ball0.x= windowWidth/2
  ball0.y= windowHeight/2
  ball0.velocityX=0
  ball0.velocityY=0
}

