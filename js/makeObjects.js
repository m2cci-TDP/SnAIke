// global
let canvas;
let ctx;
let snake;
let apple;
let timer;

function canvasSize () {
  canvas.width = 0.8 * document.body.clientWidth;
  canvas.height = 0.6 * document.body.clientHeight;
}

function init () {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  canvasSize();

  snake = new Snake({
    canvas: canvas,
    xCenter: canvas.width / 2,
    yCenter: canvas.height / 2,
    radius: 10,
    course: 0
  });
  snake.draw(ctx);

  apple = new Ring({
    canvas: canvas,
    radius: 5
  });
  apple.generate();
  apple.draw(ctx, '#d75f69', '#760d81');
}

function oneInterval () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.move(ctx, apple);
  apple.draw(ctx, '#d75f69', '#760d81');
}

function start () {
  document.getElementById('btStart').disabled = true;
  document.getElementById('btStop').disabled = false;
  document.getElementById('btReload').disabled = false;

  timer = setInterval(oneInterval, 50);
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
