window.addEventListener("load", startAni);

const container = document.querySelector("#btn_con");
const btn = document.querySelector("#btn");

function startAni() {
  btn.classList.add("fill_btn");
  document.addEventListener("pointerenter", endAni);
  container.addEventListener("click", nxtEpi);
}

function endAni() {
  console.log("slut");
  btn.style.animationDuration = "1s";
}

function nxtEpi() {
  document.body.style.backgroundColor = "darkslategrey";
  container.style.display = "none";
}
