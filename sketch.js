
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball 

function preload() {


}
 
	
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20);

	//Create the Bodies Here.

	var balls_option = {

        isStatic : false,
		restitution: 0.3,
		friction : 0,
		density : 1.2	}

	ball = Bodies.circle (200,100,20, balls_option)
    World.add ( world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  ground.show();
  ellipse(ball.position.x, ball.position.y, 20 )
}



