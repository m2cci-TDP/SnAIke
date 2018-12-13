// global
let canvas;
let ctx;
// let tabSnake = new Array(20);
let snake;
let timer;

function canvasSize () {
  canvas.width = 0.8 * document.body.clientWidth;
  canvas.height = 0.6 * document.body.clientHeight;
}
/*
function allMove () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < tabSnake.length; i++) {
    tabSnake[i].move(ctx);
  }
}
*/
function init () {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  canvasSize();
/*
  for (let i = 0; i < tabSnake.length; i++) {
    tabSnake[i] = new Snake({
      canvas: canvas,
      xCenter: canvas.width / 2,
      yCenter: canvas.height / 2,
      radius: 10,
      course: Math.floor(Math.random() * 360) - 180
    });
    tabSnake[i].draw(ctx);
  }
  */
  snake = new Snake({
    canvas: canvas,
    xCenter: canvas.width / 2,
    yCenter: canvas.height / 2,
    radius: 10,
    course: Math.floor(Math.random() * 360) - 180
  });
  snake.draw(ctx);
}

function start () {
  document.getElementById('btStart').disabled = true;
  document.getElementById('btStop').disabled = false;
  document.getElementById('btReload').disabled = false;

  //timer = setInterval(allMove, 50);
  timer = setInterval(function () { snake.move(ctx); }, 50);
}

function stop () {
  document.getElementById('btStart').disabled = false;
  document.getElementById('btStop').disabled = true;

  clearInterval(timer);
}

function reload () {
  document.getElementById('btStart').disabled = false;
  document.getElementById('btStop').disabled = true;
  document.getElementById('btReload').disabled = true;

  stop();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  init();
}
