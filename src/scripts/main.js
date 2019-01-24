/* import { GetBacon } from './utils';
const baconEl = document.querySelector('.bacon');
GetBacon()
  .then(res => {
    const markup = res.reduce((acc, val) => (acc += `<p>${val}</p>`), '');
    baconEl.innerHTML = markup;
  }).catch(err => (baconEl.innerHTML = err));

  */
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
