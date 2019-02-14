
var myObj, i, x = "";
  myObj = {
  "category":"Medical Editorial Style",
  "author":"Caroline Leopold",
  "brands":[ "Benefiber", "Overture", "Colgate" ]
  };

  for (i in myObj.brands) {
  x += myObj.brands[i] + "<br>";
  }
 
  document.getElementById("portfolio-item").innerHTML = x;
