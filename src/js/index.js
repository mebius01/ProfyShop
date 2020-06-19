// import 'normalize-scss'
import '../style/index.scss'
import "../img/logo.png"
import "../img/facebook.svg"
import "../img/instagram.svg"
import "../img/google-maps.svg"
import "../img/telephone.svg"
import "../img/open-menu-1.svg"
import "../img/open-menu-1.png"


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