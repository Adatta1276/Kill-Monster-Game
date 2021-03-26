class Ground {
    constructor(x,y,w,h,c) {

        var options = {
            'isStatic' : true
        }

        this.x = x;
        this.y  = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);

        World.add(world, this.body);

    }

    display(){
     var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.w, this.h);
    }


}

/*class GrTransparent {
    constructor(x,y,w,h) {
        var options = {
            'isStatic' : true
        }

        this.x = x;
        this.y  = y;
        this.w = w;
        this.h = h;
        
        this.visibility = 1;

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        tint(255,this.visibility);
        stroke(255,this.visibility);
        rect(pos.x, pos.y, this.w, this.h);
    }
}*/