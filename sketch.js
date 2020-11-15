var dog, happyDog, foodS,foodStock, dogImg
var dogImage, database
function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
database=firebase.database()
  dog = createSprite(250,250);
  dog.addImage(dogImage)
  dog.scale=0.15
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

  drawSprites();
  fill("red")
  text("Food Remaining: "+foodS,170,200)
  text("Note: Press UP_ARROW Key To Feed Drago Milk!")

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
