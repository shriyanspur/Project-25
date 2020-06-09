class Bin3{
    constructor(x, y, width, height){
        var bin3opt = {
            isStatic: true,
            //restitution: 0
        }
        this.body = Bodies.rectangle(1063, 325, 60, 60, bin3opt);
        this.width = width;
        this.height = height;
        this.image = loadImage("bin1.png");
        World.add(world, this.body);
    }
  
    display() {
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, 10, 60);
    }
  }