const maxWeight = window.innerWidth;
const maxHeight = window.innerHeight;
var maxBall = 20;
var initBall = maxBall;
var size = 150;
var time = 30000; // 4000 = 4s
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
    
    this.remove();
    initBall--;
    Youwin();
    cancelAnimationFrame(ball);
  };

  document.body.appendChild(ball);
  return ball;
}
function animation(ball){
  var dx = Math.random() * 10 + 10;
  var dy = Math.random() * 10 + 10 ;
  function move(){
    let x = parseFloat(ball.style.left);
    let y = parseFloat(ball.style.top);
    if(x+dx > maxWeight - 50 || x +dx < 0)
    {
      dx = -dx;
    }
    if(y+dy > maxHeight - 50 || y +dy < 20)
    {
        dy = -dy;
    }
    ball.style.left = `${x + dx}px`;
    ball.style.top = `${y + dy}px`;
    requestAnimationFrame(move);
  }
  
  move();
}

function start(){
  document.getElementById("start").style.display = "none";
  for(var i=0;i<initBall;i++)
    {
      var ball = createBall(-1,-1);
      animation(ball);
    }
    timeoutId = setTimeout(function() {
      if(initBall > 0)
      {
        alert("You lost!!!Again!!!");
        document.getElementById("start").style.display = "block";
        initBall = maxBall;
        removeBall();
      }
      timeset = 0;
  }, time);
}
function Youwin(){
  if(initBall == 0)
  alert("OK!!! You win!!!");
}
function removeBall(){
  const memeDivs = document.querySelectorAll('div.ball');
memeDivs.forEach(div => div.remove());
}