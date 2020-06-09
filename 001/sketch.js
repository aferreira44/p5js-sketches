setup = function () {
  createCanvas(800, 800);
};

function draw() {
  background(255);
  const num = 7;

  // Arc
  let x = 100;
  let y = 100;
  let w = 80;
  let h = 80;
  let angle = 360 / num;

  angleMode(DEGREES);

  for (let i = 1; i < num + 1; i++) {
    arc(x * i, y, w, h, 0, angle * i, PIE);
  }

  // ellipse();
  // circle();
  // line();
  // point();
  // quad();
  // rect();
  // square();
  // triangle();
}
