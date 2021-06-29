const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  //polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  //stand2 = new Stand(700,200,200,10);
 //console.log(block1);
  //level one
  block1 = new Block(280,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,235,30,40);
  //level two
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  //level three
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //level four
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
 //level five
 block21 = new Block(385,155,30,40);

  //ball with Slings
  ball = Bodies.circle(350,300,10);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  //stand2.display();

  strokeWeight(2);
  stroke(15);

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  fill("pink");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("turquoise");
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("grey");
  block19.display();
  block20.display();
  fill("purple");
  block21.display();

  fill("blue")

  text("drag the line and release to hit the crazy boxes",200)
  //imageMode (CENTER)
  ellipse(ball.position.x,ball.position.y,20);

  fill("green");
  //strokeWeight(2);
  //stroke(15);
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  slingShot.fly();
}