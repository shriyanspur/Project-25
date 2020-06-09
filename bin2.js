class Bin2{
    constructor(x, y, width, height){
        var bin2opt = {
            isStatic: true,
            //restitution: 0
        }
        this.body = Bodies.rectangle(850, 450, 225, 10, bin2opt);
        this.width = width;
        this.height = height;
        this.image = loadImage("bin2.png");
        World.add(world, this.body);
    }
  
    display() {
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, 225, 5);
        
    }
  }