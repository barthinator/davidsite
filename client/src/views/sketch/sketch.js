export default function sketch (p) {

  var x = 0;
  var y = 0;

  p.setup = function () {
    p.createCanvas(600, 600);
    p.background(51);
  };

  p.nextPoint = function() {
    var nextX;
    var nextY;

    var r = p.random(1);

    if (r < 0.01) {
      // 1
      nextX =  0;
      nextY =  0.16 * y;
    } else if (r < 0.86) {
      // 2
      nextX =  0.85 * x +  0.04 * y;
      nextY = -0.04 * x +  0.85 * y + 1.6;
    } else if (r < 0.93) {
      // 3
      nextX =  0.20 * x + -0.26 * y;
      nextY =  0.23 * x +  0.22 * y + 1.6;
    } else {
      // 4
      nextX = -0.15 * x +  0.28 * y;
      nextY =  0.26 * x +  0.24 * y + 0.44;
    }

    x = nextX;
    y = nextY;
  };

  // −2.1820 < x < 2.6558 and 0 ≤ y < 9.9983
  p.drawPoint = function() {
    p.stroke(255);
    p.strokeWeight(2);
    var px = p.map(x, -2.1820, 2.6558, 0, p.width);
    var py = p.map(y, 0, 9.9983, p.height, 0);
    p.point(px, py);
  };

  p.draw = function () {
    for (var i = 0; i < 500; i++) {
    p.drawPoint();
    p.nextPoint();
  }
  };
};
