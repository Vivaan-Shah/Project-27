const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState="onSling"
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,200,400,30)
bob1=new Bob(400,400,30)
rope1=new Rope(bob1.body,{x:400, y:200})
bob2=new Bob(350,400,30)
rope2=new Rope(bob2.body,{x:350,y:200})
bob3=new Bob(300,400,30)
rope3=new Rope(bob3.body, {x:300,y:200})
bob4=new Bob(450,400,30)
rope4=new Rope(bob4.body, {x:450,y:200})
bob5=new Bob(500,400,30)
rope5=new Rope(bob5.body, {x:500,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
}

function mouseDragged(){
    if(gameState==="onSling") {
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    gameState="launched";
    slingshot.fly();
}

