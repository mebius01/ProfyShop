// import 'normalize-scss'
import '../style/index.scss'
import "../img/logo.png"
import "../img/icons8-facebook-64.png"
import "../img/icons8-instagram-64.png"
import "../img/icons8-map-64.png"
import "../img/icons8-pickup-point-64.png"

console.log("hell world");

facebook.onclick = function () {
  this.classList.toggle('rotateY')
}

insta.onclick = function () {
  this.classList.toggle('rotateX')
}

map.onclick = function () {
  this.classList.toggle('rotate')
}