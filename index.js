var text = ["Unexpected Guests ?", "Cooking Gone Wrong ?", "Hungry ?" , "Feeling Lazy ?" , "Celebrations ?"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 4000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}