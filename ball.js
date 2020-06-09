class Ball{
    constructor(x, y, width, height){
        var ball_opt = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.rectangle(160,450,25,25,ball_opt);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("ball.png");
        World.add(world,this.body);
    }
    display(){
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,30,30);
    }
}