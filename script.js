
alert("Welcome to Wadi-rum page");

var place = prompt("which of the two places assigned are you interested in:wadi-Rum night camp or arabian nights hotel  ?");

while (place != "wadi-Rum night camp" && place != "arabian nights hotel")
{place= prompt("you have to choose a place of the two mentioned places please");}

var rate = prompt("can you rate our service from 1 to 5 please");

for (var i = 1; i<=rate; i++){
  document.write('<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" width="50" height="50"/>')
}





 



