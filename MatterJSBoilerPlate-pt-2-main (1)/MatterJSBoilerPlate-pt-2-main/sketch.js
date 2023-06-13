
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rotador1,rotador2,rotador3,rotador4,rotador5;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
var angle4 = 60;
var angle5 = 60;
var estrela1,estrela2, estrela3;

function preload()
{
	
}

function setup() {
	createCanvas(550, 600);
   

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    var plane_options={
		isStatic: true
	}
    plane= Bodies.rectangle(600,height,1200,20,plane_options);
	World.add(world,plane);

	//criando os rotadores
    rotador1 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,rotador1);

	rotador2 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,rotador2);

	rotador3 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,rotador3);

	rotador4 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,rotador4);

	rotador5 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,rotador5);


	// criando as estrelas
    var ball_options={
		restitution:0.4,
		friction:0.08
	}
	estrela1 = Bodies.circle(220,10,15,ball_options);
	World.add(world,estrela1);

	estrela2 = Bodies.circle(230,10,15,ball_options);
	World.add(world,estrela2);

	estrela3 = Bodies.circle(230,10,15,ball_options);
	World.add(world,estrela3);

	Engine.run(engine);
  fill("white")
}


function draw() {
  rectMode(CENTER);
  background("darkblue");

  //mostrando o solo na tela
  rect(plane.position.x,plane.position.y,1200,20);

  //mostrando os rotadores
  Matter.Body.rotate(rotador1,angle1);
  push();
  translate(rotador1.position.x,rotador1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1+= 2;
 

  Matter.Body.rotate(rotador2,angle2);
  push();
  translate(rotador2.position.x,rotador2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2+= 1.5;

  Matter.Body.rotate(rotador3,angle3);
  push();
  translate(rotador3.position.x,rotador3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3+= 2.5;


  Matter.Body.rotate(rotador5,angle5);
  push();
  translate(rotador5.position.x,rotador5.position.y);
  rotate(angle5);
  rect(0,0,150,20);
  pop();
  angle5+= 3.5;

  Matter.Body.rotate(rotador4,angle4);
  push();
  translate(rotador4.position.x,rotador4.position.y);
  rotate(angle4);
  rect(0,0,150,20);
  pop();
  angle4+= 3;


  // mostrando as estrelas
  ellipse(estrela1.position.x,estrela1.position.y,15);
  
  ellipse(estrela2.position.x,estrela2.position.y,15);

  ellipse(estrela3.position.x,estrela3.position.y,15);

  Engine.update(engine);
  drawSprites();
 
}



