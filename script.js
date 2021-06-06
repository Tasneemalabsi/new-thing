
alert("Welcome to Wadi-rum page");

var place = prompt("which of the two places assigned are you interested in: wadi-Rum night camp or arabian nights hotel  ?");

while (place != "wadi-Rum night camp" && place != "arabian nights hotel")
{place= prompt("you have to choose a place of the two mentioned places please");}

var rate = prompt("can you rate our service from 1 to 5 please");

for (var i = 1; i<=rate; i++){
  document.write('<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" width="50" height="50"/>')
}


function places () {
  while (place != "wadi-Rum night camp" && place != "arabian nights hotel")
{place= prompt("you have to choose a place of the two mentioned places please");}
return place;
}
places ()

function rating () {
  for (var i = 1; i<=rate; i++){
  document.write('<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1024px-Location_dot_black.svg.png" width="50" height="50"/>')
}
return i;

}
 rating ()

 // I changed the picture in the function rating so that you won't get lost because the function will double the number of pictures that are already in the original for loop

 





 



