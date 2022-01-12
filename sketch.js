const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, slingshot;
var stone, mango1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	tree = new Tree(580,470,500,500);
	stone = new Stone(100,600,30,50);
   
	mango1 = new Mango(560,400,60, 50);
	mango2 = new Mango(470,360,60,50);
    mango3 = new Mango(770,370,60,50);	
	mango4 = new Mango(650,360,60,50);
	mango5 = new Mango(650,250,60,50);
	mango6 = new Mango(540,300,60,50);
	mango7 = new Mango(720,420,60,50);
    mango8 = new Mango(450,440,60,50);
    mango9 = new Mango(720,320,60,50);

	slingshot = new SlingShot(stone.body,{x:100, y:600});

	Engine.run(engine);
  
}


function draw() {

  background("black");
  Engine.update(engine);

  rectMode(CENTER);


  tree.display();
  ground.display();
 
  stone.display();
 slingshot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 mango7.display();
  mango8.display();
 mango9.display();

 detectollision(stone,mango1);

drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
	slingshot.fly();
  }
  
  function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}
