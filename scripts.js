const sonic = document.getElementById("sonic");
const car = document.getElementById("car");
score = 0;
//Score calculator
setScore = () =>{
 score += 1;
  //console.log(score);
  scoreCount = document.querySelector(".scoreCount").innerHTML = "Score : " +score;
}
var timer = setInterval(setScore , 100);
function stopTimer(){
  clearInterval(timer);
}
//reseting the score to 0 for the new game
function restartTimer(){
    stopTimer();
    score = 0;
    timer = setInterval(setScore , 100);
}


function jump() {
  if (sonic.classList != "jump") {
    sonic.classList.add("jump");

    setTimeout(function () {
      sonic.classList.remove("jump");
    }, 200);
  }
}



let isAlive = setInterval(function () {
  // get current sonic Y position
  let sonicTop = parseInt(window.getComputedStyle(sonic).getPropertyValue("top"));

  // get current car X position
  let carLeft = parseInt(
    window.getComputedStyle(car).getPropertyValue("left")
  );

 //detect collision
  if (carLeft < 10 && carLeft > 0 && sonicTop >= 355) {
    // collision
    alert("GAME OVER!!! Your Score is: " + score);
    restartTimer();
  }
}, 10);



document.addEventListener("keydown", function (event) {
  jump();
});

