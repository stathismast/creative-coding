class Pipe{
  constructor(asset, scale, canvasWidth, canvasHeight){
    this.asset = asset;
    this.update(scale, canvasWidth, canvasHeight);
  }

  update(scale, canvasWidth, canvasHeight) {
    this.scale = scale;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.width = this.asset.width * this.scale;
    this.height = this.asset.height * this.scale;
    this.xPos = [];
    this.yPos = [];
    this.gap = [];
    // this.xPos = [500 * scale, 700 * scale, 900 * scale, 1110 * scale];
    // this.yPos = [0.5 * canvasHeight, 0.3 * canvasHeight, 0.6 * canvasHeight, 0.4 * canvasHeight];
    // this.gap = [0.25 * canvasHeight, 0.35 * canvasHeight, 0.30 * canvasHeight, 0.28 * canvasHeight];
    let nextPos = 500 * scale;
    while(nextPos - 500 * scale < this.canvasWidth){
      this.xPos.push(nextPos);
      nextPos += 200 * scale;
      this.yPos.push(this.rng(0.3, 0.55) * this.canvasHeight)
      this.gap.push(this.rng(0.25, 0.35) * this.canvasHeight)
    }
    console.log(canvasHeight/scale, this.xPos[0] / scale, this.xPos[1] / scale)
  }

  rng(min, max) {
    return Math.random() * (max - min) + min;
  }

  move(){
    for(let i in this.xPos){
      this.xPos[i] -= 6;
      if(this.xPos[i] < -this.width){
        this.xPos[i] = this.xPos.slice(i-1)[0] + 0.4 * this.canvasHeight;
        this.yPos[i] = this.rng(0.3, 0.55) * this.canvasHeight;
        this.gap[i] = this.rng(0.25, 0.35) * this.canvasHeight;
      }
    }
  }

  draw(){
    for(let i in this.xPos){
      image(this.asset.image, this.xPos[i], this.canvasHeight - this.yPos[i], this.width, this.height);
    }
    for(let i in this.xPos){
      imageMode(CENTER);
      translate(this.xPos[i]+this.width/2, this.canvasHeight - this.yPos[i]+this.height/2);
      rotate(-PI);

      image(this.asset.image, 0, this.height + this.gap[i], this.width, this.height);

      rotate(PI);
      translate(-(this.xPos[i]+this.width/2), -(this.canvasHeight - this.yPos[i]+this.height/2));
      imageMode(CORNER);
    }
  }
}