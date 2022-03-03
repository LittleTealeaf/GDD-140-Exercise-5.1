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
    pop();
  }
}