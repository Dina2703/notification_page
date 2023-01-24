const count = document.getElementsByClassName("count")[0];
const red_bullet = document.getElementsByClassName("marker");
const read = document.getElementsByClassName("read");

const btn = document.getElementById("btn");

btn.addEventListener("click", myFunc);

function myFunc() {
  count.innerText = "0";
  for (let i = 0; i < red_bullet.length; i++) {
    red_bullet[i].style.display = "none";
    read[i].style.backgroundColor = "hsl(210, 60%, 98%)";
  }
}
