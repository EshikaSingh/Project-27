
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(600, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(302,100,350,25);

	bob1 = new Bob(185,350,30,25);
	rope1 = new Rope(bob1.body, {x:185,y:100});

	bob2 = new Bob(245,350,30,20);
	rope2 = new Rope(bob2.body, {x:245,y:100});

	bob3 = new Bob(305,350,30,20);
	rope3 = new Rope(bob3.body, {x:305,y:100});

  bob4 = new Bob(364,350,30,20);
	rope4 = new Rope(bob4.body, {x:364,y:100});

	bob5 = new Bob(425,350,30,20);
  rope5 = new Rope(bob5.body, {x:425,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(70,700,700);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:-30});
	}

	if (keyCode === RIGHT_ARROW){

		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:60,y:-30});
	}
}



