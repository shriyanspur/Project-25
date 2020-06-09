class Land {
    constructor(x,y,width,height) {
        var land_opt ={
            restitution : 0,
            isStatic : true
        }
        this.body = Bodies.rectangle(750,470,2000,20,land_opt);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display() {
        translate(this.body.position.x, this.body.position.y);
    }
}