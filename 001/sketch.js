setup = () => {
  createCanvas(1000, 1000);
  background(255);
  angleMode(DEGREES);
  noLoop();
};

draw = () => {
  const num = 7;

  // Arc
  let x = 100;
  let y = 100;
  let w = 80;
  let h = 80;
  let angle = 360 / num;

  fill(randomColor());
  for (let i = 1; i < num + 1; i++) {
    arc(x * i, y, w, h, 0, angle * i, PIE);
  }

  // Ellipse|
  x = 100;
  y = 200;

  fill(randomColor());
  for (let i = 1; i < num + 1; i++) {
    ellipse(x * i, y, 50, (50 / num) * i);
  }

  // Circle
  x = 100;
  y = 300;

  fill(randomColor());
  for (let i = 1; i < num + 1; i++) {
    circle(x * i, y, (50 / num) * i);
  }

  // Line
  x1 = 100;
  y1 = 400;
  x2 = 100;
  y2 = 500;

  for (let i = 1; i < num + 1; i++) {
    stroke(randomNumber(255));
    line(x1 * i, y1, x1 + 50 * i, y2);
  }

  // Point
  x = 100;
  y = 600;

  for (let i = 1; i < num + 1; i++) {
    stroke(randomColor()); // Change the color
    strokeWeight(randomNumber(50)); // Make the points 10 pixels in size
    point(x * i, y);
  }

  // Rect

  x = 100;
  y = 800;
  strokeWeight(0);

  for (let i = 1; i < num + 1; i++) {
    fill(randomColor());
    rect(x * i, y, randomNumber(50));
  }

  // square();
  // triangle();

  save("001.jpg");
};

randomNumber = (n) => {
  return Math.floor(Math.random() * n + 1);
};

randomColor = () => {
  let colors = [];

  for (let i = 0; i < 3; i++) {
    colors[i] = randomNumber(255);
  }

  return color(colors[0], colors[1], colors[2]);
};
