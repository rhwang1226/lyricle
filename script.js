var start = document.getElementById("start");
var about = document.getElementById("about");
function startFunc() {
  window.location.href = "play.html";
}

function aboutFunc() {
  window.location.href = "about.html";
}

start.addEventListener("click", startFunc);
about.addEventListener("click", aboutFunc);