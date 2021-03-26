

const Engine = Matter.Engine,
World = Matter.World,
Constraint = Matter.Constraint,
Events = Matter.Events,
Bodies = Matter.Bodies,
mouseConstraint = Matter.MouseConstraint; 

//7,6,8,5 is correspondingly no of block in each tower;

var engine, world, canvas;
var ba1,ba2,mo1,mo2,mo3,su1,su2,su3;
var hero,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26;
var rope,ground,bgi,monster;

var gx;

function preload() {
//preload the images here
ba1 = loadImage("imgs/bg_lgh.png");
ba2 = loadImage("imgs/bg_drk.jpg");
mo1 = loadImage("imgs/m1.png");
mo2 = loadImage("imgs/m2.png");
mo3 = loadImage("imgs/m3.png");
su1 = loadImage("imgs/s1.png");
su2 = loadImage("imgs/s2.png");
su3 = loadImage("imgs/s3.png");

}

function setup() {
  canvas = createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  b1 = new Block(900+110,137,57,57);
  b2 = new Block(900+110,187,57,57);
  b3 = new Block(900+110,237,57,57);
  b4 = new Block(900+110,287,57,57);
 b5 = new Block(900+110,337,57,57);
  b6 = new Block(900+110,387,57,57);
  b7 = new Block(900+110,437,57,57);


  b8 = new Block(980+110,187,57,57);
  b9 = new Block(980+110,237,57,57);
  b10 = new Block(980+110,287,57,57);
  b11 = new Block(980+110,337,57,57);
  b12 = new Block(980+110,387,57,57);
  b13 = new Block(980+110,437,57,57);


  b14  = new Block(1060+110,237,57,57);
 b15 = new Block(1060+110,287,57,57);
 b16 = new Block(1060+110,337,57,57);
  b17 = new Block(1060+110,387,57,57);
  b18 = new Block(1060+110,437,57,57);


  b19 = new Block(1140+110,80,57,57);
 b20 = new Block(1140+110,137,57,57);
  b21 = new Block(1140+110,187,57,57);
  b22 = new Block(1140+110,237,57,57);
  b23 = new Block(1140+110,287,57,57);
  b24 = new Block(1140+110,337,57,57);
  b25 = new Block(1140+110,387,57,57);
  b26 = new Block(1140+110,437,57,57);
  hero = new Hero(320,295,650,350 );
  rope = new Fly(hero.body,{x : 715, y : 1});
  ground = new Ground(550,500,1600,14,"white");
  monster = new Monster(1550,304,470,510);
gx = new Ground(1650,500,825,14,"white");

 
  

}

function draw() {
  background(ba1);
Engine.update(engine);

textSize(20);
fill("red")
text("x : "+Math.round(mouseX),30,770);
text("y : "+Math.round(mouseY),130,770);

ground.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();
b24.display();
b25.display();
b26.display();

hero.display();
rope.display();
monster.display();
//gx.display();



}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x : mouseX, y: mouseY});
}


