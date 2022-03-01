/// <reference path="./libraries/p5.global-mode.d.ts" />

var columns = 0;
var size = 0;

function setup() {
  createCanvas(600, 600);
  size = 50;
  columns = width / size;
}

function draw() {
  background(220);

  for(var y = 0; y < height; y += size) {
    for(var i = 0; i < columns; i++) {
      x_1 = i * size;
      x_2 = width / 2 + Math.random() * width / 3 - width/6;

      w_1 = size;
      w_2 = 0;

      h_1 = size;
      h_2 = size * 5 +  Math.random() * width / 3 - width/6;

      r = y / height;

      x = x_1 * (1 - r) + x_2 * r;
      w = w_1 * (1 - r) + w_2 * r;
      h = h_1 * (1 - r) + h_2 * r;

      if((i + y / size)%2 == 0) {
        fill('black');
      } else {
        fill('white');
      }
      rect(x,y,w,h);
    }
  }
  

  noLoop();
}
