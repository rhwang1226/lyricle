const api = "https://api.lyrics.ovh";

//-----------------------------------------------------------------------------
var nextBtn = document.getElementById("nextBtn");

array = ["When you call me on the phone","Girl, I refuse","You must have me confused","With some other guy","The bridges were burned","Now it's your turn, to cry"]

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

  if (index == 4)
    document.getElementById("hint").innerHTML = "HINT: Song title is four words";
  
  if (index > 5) {
    document.getElementById("nextBtn").disabled = true;
  }
}

nextBtn.addEventListener("click", startFunc);

function guessFunc() {
  if (document.getElementById("fname").value == "Cry Me a River - Justin Timberlake") {
    localStorage.setItem('score', index);
    window.location.href = "win.html";
  }
  else {
    if (index == 3)
      document.getElementById("hint").innerHTML = "HINT: Song title is four words";
    if (index < 6) {
      let node = document.createElement("div");
      let textnode = document.createTextNode(array[index]);
      node.appendChild(textnode);
      document.getElementById("quote-box").appendChild(node);
    }
    if (index < 6)
      index++;
    else {
		localStorage.setItem('score', index);
		window.location.href = "loss.html";
    }
  }
}
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

guessBtn.addEventListener("click", guessFunc);

async function getResult() {
  var input = document.getElementById("fname").value;
  if (input.length < 1) {
    input = "poker face";
  }
  const searchResult = await fetch (`${api}/suggest/${input}`);
  const links= await searchResult.json();
  var songTitles = links.data.map(song => song.title_short);
  var artistNames = links.data.map(song => song.artist.name);
  var terms = [];
  for (i = 0; i < 5; i++) {
    let str = songTitles[i] + " - " + artistNames[i];
    terms.push(str);
  }
  for (i=0; i<5; i++) {
    document.getElementById("item" + (i+1).toString()).innerText = terms[i];
  }
}
getResult("a");

document.getElementById("fname").addEventListener("keydown", getResult)

function itemChoice() {
  document.getElementById("fname").value = this.innerText;
}

for (i = 0; i < 5; i++) {
  document.getElementById("item" + (i+1).toString()).addEventListener("click", itemChoice)
}