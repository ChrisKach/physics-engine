const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var box;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var options={
    isStatic:true
  }
  box = Bodies.rectangle(200,370,400,10,options);
  World.add(world,box)
  var ballOptions={
    restitution:1.0
  }
  ball=Bodies.circle(200,10,30,ballOptions);
  World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  rect(box.position.x,box.position.y,400,10)
  ellipse(ball.position.x,ball.position.y,30,30)
}

