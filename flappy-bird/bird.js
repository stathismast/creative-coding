class Bird {
  constructor(asset, scale, canvasWidth, canvasHeight) {
    this.asset = asset;
    this.update(scale, canvasWidth, canvasHeight);
    this.flapSpeed = 0.25
    this.tilt = 0;
    this.velocity = 0;
    this.ticks = 0;
  }

  update(scale, canvasWidth, canvasHeight) {
    this.scale = scale;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.width = this.asset.width * this.scale;
    this.height = this.asset.height * this.scale;
    this.x = 51 * this.scale;
    this.y = 170 * this.scale;
    this.acceleration = 0.068 * this.scale;
    this.jumpHeight = 1.2 * this.scale;
    this.terminalVelocity = 12.8 * this.scale;
  }

  jump(){
    this.velocity = this.jumpHeight;
    this.ticks = 0;
    console.log(canvasHeight)
  }

  move(){
    this.ticks += 1;
    let displacement = this.acceleration * this.ticks * this.ticks - this.velocity * this.ticks;
    if(displacement > this.terminalVelocity){
      displacement = this.terminalVelocity;
    }
    this.y += displacement;
  }

  draw(){
    let imgIndex = ceil(frameCount*this.flapSpeed)%4
    if(imgIndex % 2 == 1) imgIndex = 1;
    let img = this.asset.image[imgIndex];

    imageMode(CENTER);
    translate(this.x+this.width/2, this.y+this.height/2);
    rotate(-PI / 180 * this.tilt);

    image(img, 0, 0, this.width, this.height);

    rotate(PI / 180 * this.tilt);
    translate(-(this.x+this.width/2), -(this.y+this.height/2));
    imageMode(CORNER);
  }
}