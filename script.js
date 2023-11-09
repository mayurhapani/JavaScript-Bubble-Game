timer = 60;
score = 0;
hitnum = 0;

function hitnum_func() {
  hitnum = Math.floor(Math.random() * 10);

  document.querySelector("#hitnum").textContent = hitnum;
}

function runtimer() {
  let temerfunction = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#Timer").textContent = timer;
    } else {
      clearInterval(temerfunction);
      document.querySelector("#gbtm").innerHTML = `<div class="f_result">
            <h2>Game Over</h2>
            <h3>Your Socre Is = ${score}</h3>
          </div>`;
    }
  }, 1000);
}

function bubblemake() {
  let ball = "";
  for (i = 0; i < 176; i++) {
    let num = Math.floor(Math.random() * 10);
    ball += `<div class="ball">${num}</div>`;
  }

  document.querySelector("#gbtm").innerHTML = ball;
}

function inc_score() {
  score += 10;
  document.querySelector("#Score").textContent = score;
}

// function u_click() {
document.querySelector("#gbtm").addEventListener("click", function (u_select) {
  let u_select_num = Number(u_select.target.textContent);

  if (u_select_num === hitnum) {
    inc_score();
    bubblemake();
    hitnum_func();
  }
  console.log(Number(u_select.target.textContent));
});
// }

// console.log(Math.floor(Math.random() * 10));

runtimer();
bubblemake();
hitnum_func();
