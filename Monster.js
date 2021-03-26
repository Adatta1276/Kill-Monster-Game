class Monster {
    constructor(x,y,w,h) {

        var options = {
            'isStatic' : false,
            'restitution' : 0.18,
            'density' : 0.1
            //,
            //'friction' : 0
        }

        this.x = x;
        this.y =y;
        this.w=  w;
        this.h = h; 
        this.image = loadImage("imgs/m1.png");
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);

        World.add(world, this.body);

    }

    display(){
  var pos = this.body.position;
  push();
  //translate may cause problems
  ///translate(pos.x,pos.y);
  rectMode(CENTER);
  imageMode(CENTER);
  image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
  pop();
}


}