class Box{

constructor(x,y,width,height){



    var options ={
'restitution':1
    }
    this.box = Bodies.rectangle(x,y,width,height,options );
this.width = width;
this.height = height;
World.add(world,this.box);

}
display(){
 var pos = this.box.position;
 var angle = this.box.angle;
 push();
 translate(pos.x,pos.y);
 rotate(angle);
background(0);
 rectMode(CENTER )
rect(pos.x,pos.y,this.width,this.height);
pop();


}





}