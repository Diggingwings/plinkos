class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic:true
      }
      
      this.r=r
      this.x=x
      this.y=y

      this.body=Bodies.circle(x,y,r/2,options)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
  
  
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      noStroke();
      fill("white")
      ellipseMode(CENTER)
      ellipse(0,0,this.r,this.r)
      pop()
     
    }
  };