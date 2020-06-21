// import 'normalize-scss'
import '../style/index.scss'
import "../img/logo.png"
import "../img/facebook.svg"
import "../img/instagram.svg"
import "../img/google-maps.svg"
import "../img/telephone.svg"
import "../img/open-menu-1.svg"
import "../img/open-menu-1.png"

const menu__point = document.querySelector('.menu__point')
const menu__ul = document.querySelector('.menu__ul')

menu__point.addEventListener('click', showeMenu)

function showeMenu(e) {
  e.preventDefault()
  menu__ul.classList.toggle('hidden')
  // menu__point.classList.toggle('rotateIn');
  console.log(menu__point);
}

const map = document.getElementById('map')
const mapIcon = document.getElementById('mapIcon')

mapIcon.addEventListener('click', showeMap)

function showeMap(e) {
  e.preventDefault();
  console.log(map);
  map.classList.toggle('hidden')
}
