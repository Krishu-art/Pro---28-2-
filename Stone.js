  class Stone {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
        restitution:0.3,
        friction:0.7,
        density:1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){

      var pos = this.body.position;
      var angle = this.body.angle;

     //this.body.position.x = mouseX;
     //this.body.position.y = mouseY;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);

      pop();
    }

};