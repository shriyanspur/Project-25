class Dust {
    constructor(x, y, width, height) {
        var dust_opt = {
            isStatic : true
          }

        this.body = Bodies.rectangle(850,400,150,100,dust_opt);
        this.width = width;
        this.height = height;
        this.image = loadImage("Dust2.png");
        World.add(world,this.body);
    }
  
    display() {
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,this.width,this.height);
        
    }
}
