const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,left,right,bridge,jointLink,joint;
var stones = [];  
var bg_img;
var zom;
function preload(){
bg_img = loadImage("js/background.png");
zom = loadImage("js/zombie.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2,height-20,width,20)
  left = new Base(200,height/2,400,100)
  right = new Base(width-200,height/2,400,100)
bridge = new Bridge(20,{x:400,y:height/2})
joint = new Base(width-400,height/2,10,20)
Matter.Composite.add(bridge.body,joint)
jointLink = new Link(bridge,joint)
for (var i = 0; i <= 8; i++) {
  var x = random(width / 2 - 100, width / 2 + -200); 
  var y = random(-40, 110);
  var stone = new Stone (x, y, 80, 80);
  stones.push(stone);
  }
}

function draw() {
  background(51);
 // image(bg_img, 0, 0, width, height);

  Engine.update(engine);
//rectMode(CENTER)

  ground.display();
  left.display();
  right.display();
  
  for (var stone of stones) {
    stone.display();
  }
  // stone.display();

  bridge.show();
}
