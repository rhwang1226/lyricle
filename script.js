var start = document.getElementById("start");
var about = document.getElementById("about");

function startFunc() {
  //if (localStorage.getItem('score') == "null")
    window.location.href = "play.html";
  //else
    //window.location.href = "win.html";
}

function aboutFunc() {
  window.location.href = "about.html";
}

start.addEventListener("click", startFunc);
about.addEventListener("click", aboutFunc);