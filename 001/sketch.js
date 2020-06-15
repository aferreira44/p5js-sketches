setup = () => {
  createCanvas(800, 800);
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
  y2 = 450;

  for (let i = 1; i < num + 1; i++) {
    stroke(Math.floor(Math.random() * 255 + 1));
    line(x1 * i, y1, x1 + 50 * i, y2);
  }

  // point();
  // quad();
  // rect();
  // square();
  // triangle();

  save("001.jpg");
};

randomColor = () => {
  let colors = [];

  for (let i = 0; i < 3; i++) {
    colors[i] = Math.floor(Math.random() * 255 + 1);
  }

  return color(colors[0], colors[1], colors[2]);
};
