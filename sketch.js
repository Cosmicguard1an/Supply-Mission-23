var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var boxline1,boxline2,boxline3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)

	boxline1 = createSprite(400,670,200,20)
	boxline1.shapeColor = color(235, 23, 12)

	boxline2 = createSprite(310,630,20,100)
	boxline2.shapeColor = color(235, 23, 12)

	boxline3 = createSprite(500	,630,20,100)
	boxline3.shapeColor = color(235, 23, 12)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  //if(keyCode === DOWN_ARROW) {
	//Matter.Body.setStatic(packageBody,isStatic)
  //}

  //keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
	// Look at the hints in the document and understand how to make the package body fall only on
	if(keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false)
		//packageBody.velocityY = 2
		//packageBody.velocityY = packageBody.velocityY + 2
	}
	
}



