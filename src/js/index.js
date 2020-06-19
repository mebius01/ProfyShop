// import 'normalize-scss'
import '../style/index.scss'
import "../img/logo.png"
import "../img/icons8-facebook-64.png"
import "../img/icons8-instagram-64.png"
import "../img/icons8-map-64.png"
import "../img/icons8-phone-64.png"
import "../img/icons8-pickup-point-64.png"
import "../img/icons8-phone-bubble-64.png"
import "../img/menu.svg"

import "../img/icons8-menu-64.png"

console.log("hell world");

const map = document.getElementById('map')
const mapIcon = document.getElementById('mapIcon')

mapIcon.addEventListener('click', showeMap)

function showeMap(e) {
  e.preventDefault();
  console.log(map);
  map.classList.toggle('hidden')
}

// facebook.onclick = function () {
//   this.classList.toggle('rotateY')
// }

// insta.onclick = function () {
//   this.classList.toggle('rotateX')
// }

// map.onclick = function () {
//   this.classList.toggle('rotate')
// }