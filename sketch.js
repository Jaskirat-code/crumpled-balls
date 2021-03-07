var options={
 isStatic:false,
 restitution:0.3,
 friction:0.5,
 density:1.2
}

var box1;
var box2;
var box3;
var Ground;
var ball;
var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
//creating the box
box1= createSprite(600,645,200,20);
box1.shapeColor=("red");
box2= createSprite(499,605,20,100);
box2.shapeColor=("red");
box3= createSprite(690,605,20,100);
box3.shapeColor=("red");

//creating the ball
ball=createSprite(200,650,100,5)
ball = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.5, isStatic:true});
	World.add(world,ball);

//creating things related to the engine
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

  //creating the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
Matter.Bodies.circle(60,60,50,options);

packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



//displaying the objects
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyDown() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperPbject.body,paperObject.body.position,{x:85,y:-85});
    Matter.Body.setStatic(ball,false); 
  }
}



