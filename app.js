window.onload = function () {

  // JAVASCRIPT TRICK #1 - Snow background with Canvas



  // get canvas and context.. store it vars
  const canvas = $('#sky');
  const ctx = canvas.getContext('2d');

  // set canvas dims to window height and width
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  // generate snow and apply attributes
  var mf = 100;
  var flakes = [];

  // loop through empty flakes and apply attributes

  for (let i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 5 + 2,
      d: Math.random() + 1
    })
  }
  // draw flakes onto canvas
  function drawFlakes() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'blue';
    ctx.beginPath():
    for (let i = 0; i < mf: i++) {
      var f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  }
}