const Engine=Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,division1,division2,division3,division4,division5,division6,division7
var canvas,Particle1
var pa1,pa2,pa3,pa4,pa5,pa6,pa7,pa8,pa9,pa10,pa11,pa12,pa13,pa14,pa15,pa16,pa17,pa18,pa19,pa20
var pa21,pa22,pa23,pa24,pa25,pa26,pa27,pa28,pa29,pa30,pa31,pa32,pa33,pa34,pa34,pa35,pa36,pa37,pa38,pa39,pa40
var particles = []
var plinkos = []
var divisions = []

function setup() {
 createCanvas(600,840);
 
  engine = Engine.create();
    world = engine.world;
    pa1=new Plinko(50,70,PI/0.2)
    pa2=new Plinko(100,70,PI/0.2)
    pa3=new Plinko(150,70,PI/0.2)
    pa4=new Plinko(200,70,PI/0.2)
    pa5=new Plinko(250,70,PI/0.2)
    pa6=new Plinko(300,70,PI/0.2)
    pa7=new Plinko(350,70,PI/0.2)
    pa8=new Plinko(400,70,PI/0.2)
    pa9=new Plinko(450,70,PI/0.2)
    pa10=new Plinko(500,70,PI/0.2)
    pa11=new Plinko(550,70,PI/0.2)
    pa12=new Plinko(60,140,PI/0.2)
    pa13=new Plinko(120,140,PI/0.2)
    pa14=new Plinko(180,140,PI/0.2)
    pa15=new Plinko(240,140,PI/0.2)
    pa16=new Plinko(300,140,PI/0.2)
    pa17=new Plinko(360,140,PI/0.2)
    pa18=new Plinko(420,140,PI/0.2)
    pa19=new Plinko(480,140,PI/0.2)
    pa20=new Plinko(540,140,PI/0.2)
    pa21=new Plinko(50,210,PI/0.2)
    pa22=new Plinko(100,210,PI/0.2)
    pa23=new Plinko(150,210,PI/0.2)
    pa24=new Plinko(200,210,PI/0.2)
    pa25=new Plinko(250,210,PI/0.2)
    pa26=new Plinko(300,210,PI/0.2)
    pa27=new Plinko(350,210,PI/0.2)
    pa28=new Plinko(400,210,PI/0.2)
    pa29=new Plinko(450,210,PI/0.2)
    pa30=new Plinko(500,210,PI/0.2)
    pa31=new Plinko(550,210,PI/0.2)
    pa32=new Plinko(60,280,PI/0.2)
    pa33=new Plinko(120,280,PI/0.2)
    pa34=new Plinko(180,280,PI/0.2)
    pa35=new Plinko(240,280,PI/0.2)
    pa36=new Plinko(300,280,PI/0.2)
    pa37=new Plinko(360,280,PI/0.2)
    pa38=new Plinko(420,280,PI/0.2)
    pa39=new Plinko(480,280,PI/0.2)
    pa40=new Plinko(540,280,PI/0.2)
    





  division1= new Division(10,550,10,300) 
  division2= new Division(100,550,10,300)
  division3= new Division(190,550,10,300)
  division4= new Division(290,550,10,300)
  division5= new Division(390,550,10,300)
  division6= new Division(490,550,10,300)
  division7= new Division(590,550,10,300)
  ground1= new Ground(200,700,890,10)
  
}

function draw() {
  background('black');
  Engine.update(engine)

  ground1.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
  pa1.display()
  pa2.display()
  pa3.display()
  pa4.display()
  pa5.display()
  pa6.display()
  pa7.display()
  pa8.display()
  pa9.display()
  pa10.display()
  pa11.display()
  pa12.display()
  pa13.display()
  pa14.display()
  pa15.display()
  pa16.display()
  pa17.display()
  pa18.display()
  pa19.display()
  pa20.display()
  pa21.display()
  pa22.display()
  pa23.display()
  pa24.display()
  pa25.display()
  pa26.display()
  pa27.display()
  pa28.display()
  pa29.display()
  pa30.display()
  pa31.display()
  pa32.display()
  pa33.display()
  pa34.display()
  pa35.display()
  pa36.display()
  pa37.display()
  pa38.display()
  pa39.display()
  pa40.display()
 
  

  

 //plinkos.display()
  
   
  play()
  drawSprites()
}


function play(){
  if(frameCount%60===0){
    particles.push(new Particle(random(width/5-10,width+10), 10,10))
   
  };

  for(var j=0; j< particles.length;j++){
    particles[j].display();
  }
  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
  //for(var j=40;j<=width;j=j+50){
   //plinkos.push(new Plinko(j,75,PI/2));
    //plinkos[j].display()
   
    //}
   
     //for(var j= 15; j<=width-10;j=j+50){
     // plinkos.push(new Plinko(j,175,PI/2));
      //plinkos[j].display()
     
    // }
   
}
