// * NOT EXACTLY 'TRON' *
//***************************************//

//setup for animation including variables

let wide;

//setup global variable

let global_var = "Blue Dot";

//assign first variable numerical value

wide = 800;

//assign position variable for x and y

let posX = 0;

let posY = 0;

function setup() {
  createCanvas( wide, 800 );

//color background

  background( 200, 150, 30 );
}

//draw an ellipse and make it follow the cursor

function draw() {

//make sandbox and turn of cursor

  push();

  noCursor();
  translate( mouseX, mouseY );
  fill( 0, 0, 255 );
  ellipse( posX, posY, 80 );


//Write 'blue dot' text in ellipse and color ellipse and text

  fill( 255, 0, 0 );
  text( global_var, -25, 0 );

  pop();

//create square in a new sandbox
//add new text with local_variable

  push();

  translate( mouseX, mouseY );
  fill( 255, 0, 0 );
  rect(25, 25, 75, 75 );
  fill( 0, 0, 255 );
  let squareText = "Red Square";
  text( squareText, 30, 60 );

  pop();
}
