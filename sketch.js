

 const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld
var object;
var ballll
function setup() {
  createCanvas(400,400);
myengine = Engine.create();
myworld = myengine.world;
var options = {isStatic : true} ;

object = Bodies.rectangle(200,390,400,20,options);
 World.add(myworld,object);
 console.log(object);
 var ball_option = {restitution:3}
 ballll=Bodies.circle(200,100,20,ball_option)
 World.add(myworld,ballll)
}

function draw() {
  background(0);  
  Engine.update(myengine);
  rectMode(CENTER);
rect(object.position.x,object.position.y,400,20);
ellipseMode(RADIUS)
ellipse(ballll.position.x,ballll.position.y,20,20)
}