// set global variables
let backcol;
// declare particle object
let par = {};

// assign qualities

  par.color = 'green';
par.size = { x: 30, y: 40 };

// create canvas

function setup() {
  backcol = color( 255, 204, 0 );

// create canvas (width and height)

  createCanvas( 600, 400 );
  background( backcol );}

// draw particle object

function draw() {
  rect(300, 200, par.size.x, par.size.y);
  fill(par.color);

}
