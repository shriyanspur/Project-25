const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var bin1, bin2, bin3;
var dust1, dust2;
var land;
var backImg;
var keyCode = 0;

function preload() {
  backImg = loadImage("back.jpg");
  
  dust1Img = loadImage("Dust1.png");
}

function setup() {
  createCanvas(1340,500);
    
  engine = Engine.create();
  world = engine.world;
  
  dust2 = new Dust(850, 400, 150, 100);
  land = new Land(750,470,2000,20);
  ball = new Ball(160,450,50,50);

  var bin_opt = {
    isStatic: true,
    restitution: 0.1
  }

  bin1 = Bodies.rectangle(860, 420, 10, 60, bin_opt);
  World.add(world,bin1);

  bin2 = Bodies.rectangle(870, 450, 87, 10, bin_opt);
  World.add(world,bin2);
  
  bin3 = Bodies.rectangle(927, 420, 10, 60, bin_opt);
  World.add(world,bin3);
}

function draw() {
  background(backImg);
  Engine.update(engine);
  
  image(dust1Img, 850, 300, 150, 100);
 
  fill(124, 9, 9);
  strokeWeight(0);
  rect(870, 400, 10, 60);
  rect(870, 460, 87, 10);
  rect(947, 400, 10, 60);

  
  dust2.display();
  land.display();
  ball.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.position, {x:37, y:-37});
  }
}