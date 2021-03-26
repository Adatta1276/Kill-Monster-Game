class Block {
    constructor(x,y,w,h) {
        var options = {
            'isStatic' :false,
          'restitution' : 0.28,
          'density' : 0.7
             
        }


        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);

        World.add(world, this.body);
    }

    display() {
           
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke(0);
        fill("red");
        rect(0,0,this.w,this.h);
        pop();

    }
    
}