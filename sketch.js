/// <reference path="./libraries/p5.global-mode.d.ts" />

var size = 0;
var cols = 0;
var rows = 0;

function setup() {
  createCanvas(600, 600);
  size = 50;
  cols = 10;
  rows = 10;
}

function draw() {
  background(255);

  draw_box(0, 0);

  // for(var y = 0; y < height; y += size) {
  //   for(var i = 0; i < columns; i++) {
  //     x_1 = i * size;
  //     x_2 = width / 2 + Math.random() * width / 4 - width/8;

  //     w_1 = size;
  //     w_2 = 0;

  //     h_1 = size;
  //     h_2 = size * 5 +  Math.random() * width / 2 - width/4;

  //     r = y / height;

  //     x = x_1 * (1 - r) + x_2 * r;
  //     w = w_1 * (1 - r) + w_2 * r;
  //     h = h_1 * (1 - r) + h_2 * r;

  //     if((i + y / size)%2 == 0) {
  //       fill('black');
  //     } else {
  //       fill('white');
  //     }
  //     rect(x,y,w,h);
  //   }
  // }


  noLoop();
}

function draw_box(c, r) {
  if (c < cols && r < rows) {
    push();
    if ((r + c) % 2 == 0) {
      fill('black');
    } else {
      fill('white');
    }

    rotate(Math.random() * 0.15 - 0.075);
    rect(0, 0, size, size);

    if(c + 1 < cols) {
      push();
      translate(size, 0);
      draw_box(c + 1, r);
      pop();
    }

    if(c == 0) {
      push();
      translate(0,size);
      draw_box(c,r+1);
      pop();
    }
    // if(c <= r) {
    //   push();
    //   translate(size,0);
    //   draw_box(c+1,r);
    //   pop();
    // }
    // if (r >= c ) {
    //   push();
    //   translate(0,size);
    //   draw_box(c,r+1);
    //   pop();
    // }

    pop();
  }
}