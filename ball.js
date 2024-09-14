const maxWeight = window.innerWidth;
const maxHeight = window.innerHeight;
var initBall = 1;
var maxBall = 20;
var size = 100;
var time = 4000; // 4000 = 4s
var timeset = 0;
var timeoutId = setTimeout(function() {
  alert("ok");
}, time);

clearTimeout(timeoutId);

function createBall(x,y){
  var ball = document.createElement("div");
  ball.classList.add("ball");
  if(x < 0 && y < 0){
  ball.style.left = `${Math.random()* (maxWeight - 50)}px`;
  ball.style.top = `${Math.random()* (maxHeight - 50)}px`;
  }
  else{
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
  }
  ball.style.width= `${size}px`;
  ball.style.height= `${size}px`;

  ball.onmouseover = function(){
    clearTimeout(timeoutId);
    timeset=0;
    this.remove();
    initBall--;
    cancelAnimationFrame(ball);
  };

  document.body.appendChild(ball);
  return ball;
}
function animation(ball){
  var dx = Math.random() * 10 + 20;
  var dy = Math.random() * 10 + 20;
  function move(){
    let x = parseFloat(ball.style.left);
    let y = parseFloat(ball.style.top);
    if(x+dx > maxWeight - 50 || x +dx < 0)
    {
      dx = -dx;
    }
    if(y+dy > maxHeight - 50 || y +dy < 0)
    {
        dy = -dy;
    }
    ball.style.left = `${x + dx}px`;
    ball.style.top = `${y + dy}px`;
    requestAnimationFrame(move);
  }
  
  move();
}
var ball = createBall(-1,-1);
animation(ball);

document.addEventListener("click" , function(e) {
  let xox = e.clientX;
  let yoy = e.clientY;
  if(initBall< maxBall)
  {
  var cBall = createBall(xox,yoy-4);
  animation(cBall);
  initBall++;
  }
  notice();

});
function notice(){
  if(initBall == maxBall){
    if(timeset == 0 )
    {
      timeoutId = setTimeout(function() {
        alert("You win");
        timeset = 0;
    }, time);
    timeset = 1;
    }
  }
  if(initBall != maxBall)
    clearTimeout(timeoutId);
}
document.addEventListener("mouseover" , function(e) {
  clearTimeout(timeoutId);
  notice();
});
document.addEventListener("mouseout" , function(e) {
  clearTimeout(timeoutId);
  timeset= 0;
});