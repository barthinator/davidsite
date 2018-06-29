export default function sketch (p) {

  var canvas;
  var drops = [];
  var mic;

  p.setup = function () {
    canvas = p.createCanvas(1920, 1080);
    for (var i = 0; i < 200; i++) {
      drops[i] = new Drop();
    }
  };


    p.draw = function () {
      p.background(230, 230, 250);
      for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show();
      }
    };

  // Daniel Shiffman
  // http://codingtra.in
  // http://patreon.com/codingtrain
  // Code for: https://youtu.be/KkyIDI6rQJI


  function Drop() {
    this.x = p.random(p.width);
    this.y = p.random(-500, -50);
    this.z = p.random(0, 20);
    this.len = p.map(this.z, 0, 20, 10, 20);
    this.yspeed = p.map(this.z, 0, 20, 1, 20);

    this.fall = function() {
      this.y = this.y + this.yspeed;
      var grav = p.map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + grav;

      if (this.y > p.height) {
        this.y = p.random(-200, -100);
        this.yspeed = p.map(this.z, 0, 20, 4, 10);
      }
    }

    this.show = function() {
      var thick = p.map(this.z, 0, 20, 1, 3);
      p.strokeWeight(thick);
      p.stroke(138, 43, 226);
      p.line(this.x, this.y, this.x, this.y+this.len);
    }
  }
};
