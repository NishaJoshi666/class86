const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var bird1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(790,340,70,70);
    box2 = new Box(1050,350,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new pig(910,350);
    bird1 = new bird(200,300);
    log1 = new log (915,300,320,PI/2);

}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    text(mouseX +","+mouseY,200,20);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display();
    log1.display();

}