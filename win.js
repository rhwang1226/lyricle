



//Displaying score
document.getElementById("win").innerHTML = "You've guessed it in " + localStorage.getItem('score') + " tries!"


var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() +1)

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var dd = String(today.getDate()).padStart(2, '0');
var yyyy = today.getFullYear();
var mm = month[today.getMonth()];

var d2 = String(tomorrow.getDate()).padStart(2, '0');
var y2 = tomorrow.getFullYear();
var m2 = month[tomorrow.getMonth()];

today = mm + " " + dd + ", " + yyyy + " 23:59:59"
tomorrow = m2 + " " + d2 + ", " + y2 + " 23:59:59"

var countDownDate = new Date(today).getTime();


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
    localStorage.setItem('score',null)
    countDownDate = new Date(tomorrow).getTime();
  }
}, 1000);