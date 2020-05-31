window.onload = function () {

  // JAVASCRIPT TRICK #1 - Snow background with Canvas


  // get canvas and context.. store it vars
  var canvas = document.getElementById('sky');
  var ctx = canvas.getContext('2d');

  // set canvas dims to window height and width
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  // generate snow and apply attributes
  var mf = 100;
  var flakes = [];

  // loop through empty flakes and apply attributes

  for (var i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 10 + 2,
      d: Math.random() + 1
    })
  }
  // draw flakes onto canvas
  function drawFlakes() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    for (var i = 0; i < mf; i++) {
      var f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  }
  // animate the flakes
  var angle = 0;

  function moveFlakes() {
    angle += 0.01;
    for (var i = 0; i < mf; i++) {
      // store current flake
      var f = flakes[i];

      // update x and y coordinates of each snowflake
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 2;

      // if the snow reaches the bottom, send a new one to the top

      if (f.y > h) {
        flakes[i] = { x: Math.random() * w, y: 0, r: f.r, d: f.d };
      }
    }
  }
  setInterval(drawFlakes, 25);
}


