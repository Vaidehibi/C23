//to create the physics engine
const Engine= Matter.Engine;
//to create the physical world
const World= Matter.World;
//the objects that live inside the world
const Bodies= Matter.Bodies;


var engine,world,box1,box2,ground1;

function setup() {
  var canvas= createCanvas(400,400);
  engine= Engine.create();
 world= engine.world;

 box1=new Box(200,300,50,50);
 box2= new Box(240,100,50,100);
 ground1= new Ground(200,390,400,20);
}

function draw() {
  background(0);
  Engine.update(engine);
  text(mouseX+ ","+ mouseY,mouseX, mouseY) ;
  box1.display();
  box2.display();
  ground1.display();
}