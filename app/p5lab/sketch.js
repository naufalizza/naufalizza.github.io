function draw() {
    background(200);
  
    let leftWall = 25;
    let rightWall = 75;
  
    // xm is just the mouseX, while
    // xc is the mouseX, but constrained
    // between the leftWall and rightWall!
    let xm = mouseX;
    let xc = constrain(mouseX, leftWall, rightWall);
  
    // Draw the walls.
    stroke(150);
    line(leftWall, 0, leftWall, height);
    line(rightWall, 0, rightWall, height);
  
    // Draw xm and xc as circles.
    noStroke();
    fill(150);
    ellipse(xm, 33, 9, 9); // Not Constrained
    fill(0);
    ellipse(xc, 66, 9, 9); // Constrained
  }