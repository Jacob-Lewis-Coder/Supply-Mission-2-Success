var helicopterIMG, helicopterSprite, packageSprite,packageImage;
var packageBody,ground


var rect_base, rect_left, rect_right
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageImage=loadImage("package.png")
}

function setup() {
	createCanvas(700, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(440, 80, 10,10);
	packageSprite.addImage(packageImage)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect_baseSprite = createSprite(width/2, 655, 200, 20);
	rect_baseSprite.shapeColor = "red";

	rect_leftSprite = createSprite(260, 600, 20, 100);
	rect_leftSprite.shapeColor = "red";

	rect_rightSprite = createSprite(440, 600, 20, 100);
	rect_rightSprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	//Matter.Body.setStatic(packageBody, false);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 rect_base = Bodies.rectangle(width/2, 640, 200, 20 , {isStatic:true} );
	 World.add(world, rect_base);

	 rect_left = Bodies.rectangle(260, 600, 20, 100, {isStatic:true} );
	 World.add(world, rect_left);

	 rect_right = Bodies.rectangle(440, 600, 20, 100, {isStatic:true} );
	 World.add(world, rect_right);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  
  drawSprites();
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//packageBody = createSprite(width/2,300,5, {restitution:0.5, isStatic:true});
		

	packageBody = Bodies.circle(440 , 200 , 5 , {restitution:0.5, isStatic:true});
	
	World.add(world, packageBody);
	Matter.Body.setStatic(packageBody, false);
	//packageBody.collide(ground); 
	//display()
	{ angle =  this.packageBody.angle ;
    push();
	translate(this.packageBody.position.x, this.packageBody.position.y)
	rotate(45);
	rectMode(CENTER);
	rect(0, 0, this.width, this.height);
	pop();
    }
	 Engine.run(engine);
  }
}



