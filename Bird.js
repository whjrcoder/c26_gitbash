class Bird extends Baseclass{
    constructor(x, y,width,) {
      super(x,y,50,50)
      this.image=loadImage("sprites/bird.png")
     
    }
    display(){
      var pos=this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      super.display();
    }
  }