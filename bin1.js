class Bin1{
    constructor(x, y, width, height){
        var bin1opt = {
            isStatic: true,
            //restitution: 0
        }
        this.body = Bodies.rectangle(850, 325, 10, 60, bin1opt);
        this.width = width;
        this.height = height;
        this.image = loadImage("bin1.png");
        World.add(world, this.body);
    }
  
    display() {
        //rect(this.body.position.x, this.body.position.y);
        translate(this.body.position.x, this.body.position.y);
        //rectMode(CENTER);
        //Fill('red')
        image(this.image, 0, 0, 10, 60);
    }
  }