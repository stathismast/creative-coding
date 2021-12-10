class Fly {
  constructor(x = 0, y = 0, settings = { wobbleWidth: 7, wobbleSpeed: 5, maxSpeed: 10, width: 5, blurRatio: 8, color: { r: 255, g: 255, b: 255 }, blur: true }){
    this.x = x;
    this.y = y;

    this.xPrev = x;
    this.yPrev = y;

    this.wobbleWidth = settings.wobbleWidth;
    this.wobbleSpeed = settings.wobbleSpeed;
    this.maxSpeed = settings.maxSpeed + random(-4,4);
    this.width = settings.width + random(-2,2);
    this.blurRatio = settings.blurRatio;
    this.color = settings.color;
    this.blur = settings.blur;

    this.xOff = random(1,100000);
    this.yOff = random(1,100000);

    this.target = { x: 0, y: 0 };
  }

  updateTarget(x, y){
    this.target.x = x;
    this.target.y = y;
  }

  move(){
    this.xPrev = this.x;
    this.yPrev = this.y;
    this.xOff += this.wobbleSpeed/100;
    this.yOff += this.wobbleSpeed/100;
    this.x += map(noise(this.xOff), 0, 1, -this.wobbleWidth, this.wobbleWidth);
    this.y += map(noise(this.yOff), 0, 1, -this.wobbleWidth, this.wobbleWidth);

    let distanceFromTarget = sqrt((this.x-this.target.x)*(this.x-this.target.x) + (this.y-this.target.y)*(this.y-this.target.y))

    if(this.x > this.target.x)
      this.x += max(-distanceFromTarget/20, -this.maxSpeed) * abs(this.x - this.target.x) / (abs(this.x - this.target.x)+abs(this.y - this.target.y));
    else
      this.x += min(distanceFromTarget/20, this.maxSpeed) * abs(this.x - this.target.x) / (abs(this.x - this.target.x)+abs(this.y - this.target.y));

    if(this.y > this.target.y)
      this.y += max(-distanceFromTarget/20, -this.maxSpeed) * abs(this.y - this.target.y) / (abs(this.x - this.target.x)+abs(this.y - this.target.y));
    else
      this.y += min(distanceFromTarget/20, this.maxSpeed) * abs(this.y - this.target.y) / (abs(this.x - this.target.x)+abs(this.y - this.target.y));
  }

  draw(){
    if(this.blur){
      strokeWeight(this.width);
      stroke(255,0,0);
      line(this.x, this.y, this.xPrev+(this.xPrev-this.x)/this.blurRatio, this.yPrev+(this.yPrev-this.y)/this.blurRatio);

      strokeWeight(this.width);
      stroke(0,0,255);
      line(this.x+(this.x-this.xPrev)/this.blurRatio, this.y+(this.y-this.yPrev)/this.blurRatio, this.xPrev, this.yPrev);
    }

    strokeWeight(this.width);
    stroke(this.color.r,this.color.g,this.color.b);
    line(this.x, this.y, this.xPrev, this.yPrev);
  }
}