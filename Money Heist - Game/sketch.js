var welcome;
var welcomeIMG
var gameState = 0
var playerCount
var player
var database
var sprite
var spriteIMG
var img1
var img2
var sprite2
var sprite3
var sprite4
var img4
var sprite5
var img5
var cont
var contimg
var start
var startIMG


function preload(){
  welcomeIMG = loadImage("2.jpg")
  greetingIMG = loadImage("welcome.png")
  //img1 = loadImage("3.jpg")
  nextIMG= loadImage("30.png")
  storyIMG = loadImage("33.png")
  rulesIMG = loadImage("34.jpg")
  contimg = loadImage("32.png")
  startIMG = loadImage("35.png")
  

}

function setup() {
  createCanvas(1000,600);
  database = firebase.database();

  sprite = createSprite(500,300,20,20)
  sprite.addImage(welcomeIMG);
  sprite.scale = 0.6
  //sprite.visible = false

  greeting= createSprite(500,300.20,20);
  greeting.addImage(greetingIMG);
  greeting.scale = 0.9
  greeting.visible = false

  next = createSprite(900,500,20,20);
  next.addImage(nextIMG);
  next.scale = 0.5
  next.visible = false

  storyPage = createSprite(500,300,20,20);
  storyPage.addImage( storyIMG);
  storyPage.scale = 0
  storyPage.visible = false

  rulesPage= createSprite(500,300.20,20);
  rulesPage.addImage(rulesIMG);
  rulesPage.visible = false

  cont = createSprite(800,580,20,20);
  cont.addImage(contimg);
  cont.scale = 0.8
  cont.visible = false

  starting = createSprite(850,500,20,20)
  starting.addImage(startIMG)
  starting.scale = 0.3
  starting.visible = false

  
  
  
  
 
  game = new Game();
  game.start();
}

function draw() {
  background("black");  
 
  if(playerCount === 1){
    game.update(1);
    greeting.visible = true
    next.visible=true
    story()
    rules()
    
  }
  
  if(gameState === 1){
    game.play();
  }
  // if(gameState===2){
  //   fill("white")
  //   text("hello",500,300)
  // }
  drawSprites()
  fill("blue")
  textSize(50)
  text(mouseX+","+mouseY,mouseX,mouseY)
}

