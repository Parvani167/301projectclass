class Ground {

  constructor(x,y,width,height){

    var optionsg = {

      isStatic : true

    }


this.body = Bodies.rectangle(x , y ,1200,10,optionsg);
World.add(world,this.body);

  }


  display(){
    var pos = this.body.position ;






    rectMode(CENTER)
    rect(pos.x , pos.y , 1200 ,10)






}
}
   