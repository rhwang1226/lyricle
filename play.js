var nextBtn = document.getElementById("nextBtn");

array = ["But that'll last for never","It's cold outside","Like when you walked out my life","Why you walk out my life?","I get like this every time","On these days that feel like you and me"]
var index = 1; 

let node = document.createElement("div");
let textnode = document.createTextNode(array[0]);
node.appendChild(textnode);
document.getElementById("quote-box").appendChild(node);

function startFunc() {
  if (index < 6) {
    let node = document.createElement("div");
    let textnode = document.createTextNode(array[index]);
    node.appendChild(textnode);
    document.getElementById("quote-box").appendChild(node);
  }
  if (index <= 5)
    index++;
  
  if (index > 5) {
    document.getElementById("nextBtn").disabled = true;
  }
}

nextBtn.addEventListener("click", startFunc);

function guessFunc() {
  if (document.getElementById("fname").value.toLowerCase() == "heartbreak anniversary") {
    window.location.href = "win.html";
  }
  else {
    if (index < 6) {
      let node = document.createElement("div");
      let textnode = document.createTextNode(array[index]);
      node.appendChild(textnode);
      document.getElementById("quote-box").appendChild(node);
    }
    if (index < 6)
      index++;
    else {
      window.location.href = "loss.html";
    }
  }
}

// Set the date we're counting down to
var countDownDate = new Date("Mar 30, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

guessBtn.addEventListener("click", guessFunc)
