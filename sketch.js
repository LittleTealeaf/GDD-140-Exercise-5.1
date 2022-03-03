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
    //Store current position
    push();

    //Fill based on the position
    if ((r + c) % 2 == 0) {
      fill('black');
    } else {
      fill('white');
    }

    //Rotate a random amount
    rotate(Math.random() * 0.15 - 0.075);
    //Create a rectangle here
    rect(0, 0, size, size);

    //If there are more columns
    if(c + 1 < cols) {
      //Store current location
      push();
      //Translate over to the right
      translate(size, 0);
      //Draw a box
      draw_box(c + 1, r);
      //Revert position
      pop();
    }

    //If it's the first in the column
    if(c == 0) {
      //Store current location
      push();

      //translate down 1 size
      translate(0,size);
      //recursively call
      draw_box(c,r+1);
      //Revert position
      pop();
    }
    //Revert everything back
    pop();
  }
}