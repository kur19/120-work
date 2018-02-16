// setup function
function setup() {
  // building my canvas for drawing
  createCanvas( 600, 800 );
}

function draw() {

  // background color
  background( 'rgb(52, 63, 205)' );

  /* **************************** */
  /* MAIN SANDBOX */
  /* **************************** */
  push();

  // move grid to center( x:0, y:0 )
  // to center of canvas
  translate( 300, 400 );

  /* **************************** */
  /* BODY */
  /* **************************** */
  push();
  rect( -50, -100, 100, 200 );

  push();
  fill( 'rgba(10, 218, 31, 0.69)' );
  translate(-50, -100, 100, 200 );
  rect(0, 0, 100, 200);

  pop(); //BODY END!

  /* ***************************** */
  /* LEGS */
  /* ***************************** */

  push();

  translate( 0, 100 );

  // LEFT LEG
  fill( 'rgb(0, 0, 0)' );
  triangle( -50, 0, 0, 0, -50, 200);

  //RIGHT LEG
  scale( -1, 1 );
  triangle( -50, 0, 0, 0, -50, 200);

  pop(); // LEGS END

  /* ***************************** */
  /* ARMS */
  /* ***************************** */
  push();
  translate( 0, -75 );

  strokeWeight( 15 );
  line( -50, -20, -100, -175);
  line( 50, -20, 100, -175);

  strokeWeight( 30 );
  point( -100, -175 );
  point( 100, -175 );

  pop(); //ARMS END

  ellipse(0, -100, 10 );

  /* ***************************** */
  /* HEAD */
  /* ***************************** */

  push();

  translate( 0, -100 );

  fill( 'rgb(230, 216, 30)' );

  ellipse( 0, 0, 100, 85);

  // MOUTH

  fill( 'rgb(180, 36, 36)' );
  arc( 0, 20, 100, 30, radians(400),
  radians(155),
  PIE);

  // NOSE

  fill( 'rgb(68, 56, 124)' );

  triangle( 0, -10, 10, 15, -10, 15);

  //eyes
  push();
  translate( -30, -15 );
  ellipse( 0, 0, 10 );
  pop();

  push();
  translate( 30, -15 );
  ellipse( 0, 0, 10 );
  pop();

  pop(); // HEAD END
}
