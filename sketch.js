var canvas;
var music1;
var surface1, surface2, surface3, surface4;
var box;
var topEdge, bottomEdge, leftEdge, rightEdge, edges;

function preload(){
    music1 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100,570,190,20);
    surface1.shapeColor = 'blue';

    surface2 = createSprite(300,570,190,20);
    surface2.shapeColor = 'orange';

    surface3 = createSprite(500,570,190,20);
    surface3.shapeColor = 'magenta';

    surface4 = createSprite(700,570,190,20);
    surface4.shapeColor = 'green';

    box = createSprite(random(20,750),300,10,10);
    box.shapeColor = 'white';
    box.velocityX = random(-10,10);
    box.velocityY = random(-10,10);

    topEdge = createSprite(400,0,800,5);
    bottomEdge = createSprite(400,600,800,5);
    leftEdge = createSprite(0,300,5,600);
    rightEdge = createSprite(800,300,5,600);

    edges = new Group();
    edges.add(topEdge);
    edges.add(bottomEdge);
    edges.add(leftEdge);
    edges.add(rightEdge);
}

function draw() {
    background(rgb(169,169,169));

    
    box.bounceOff(edges);
    

    if(box.isTouching(surface1)) {
        box.shapeColor = surface1.shapeColor;
        box.bounceOff(surface1);
        music1.play();
    }
    if(surface2.isTouching(box)) {
        box.shapeColor = surface2.shapeColor;
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(box.isTouching(surface3)) {
        box.shapeColor = surface3.shapeColor;
        box.bounceOff(surface3);
    }
    if(box.isTouching(surface4)) {
        box.shapeColor = surface4.shapeColor;
        box.bounceOff(surface4);
    }

    drawSprites();
}
