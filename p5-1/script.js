let e1, e2;
const barWidth = 20;
let lastBar = -1;

function setup() {
    createCanvas(1020, 540);
    colorMode(HSB, width, height, 50);
    noStroke();
    e1 = new Eye(320, 270, 260);
    e2 = new Eye(710, 270, 260);
}

function draw() {
    e1.update(mouseX, mouseY);
    e2.update(mouseX, mouseY);
    e1.display();
    e2.display();
    let whichBar = mouseX / barWidth;
    if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(barX, mouseY, 66);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}

function Eye(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;

    this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

this.display = function() {
    push();
    translate(this.x, this.y);
    fill(260);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(153, 204, 0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}