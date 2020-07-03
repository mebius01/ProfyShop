// import 'normalize-scss'
import "../js/data"

import '../style/index.scss'
import "../img/favicon.png"
import "../img/facebook.svg"
import "../img/instagram.svg"
import "../img/google-maps.svg"
import "../img/telephone.svg"
import "../img/1.jpg"
import "../img/2.jpg"
import "../img/3.jpg"
import data from "../js/data"


// ICON
const closMap = document.querySelector('.map')
const mapIcon = document.getElementById('mapIcon')
const closCall = document.querySelector('.call')
const callIcon = document.getElementById('callIcon')


mapIcon.addEventListener('click', showMap)
closMap.addEventListener('click', hideMap)

callIcon.addEventListener('click', showCall)
closCall.addEventListener('click', hideCall)

function showModal(element) {
  element.classList.add('zoomIn')
  element.style.display = 'block';
  console.log(element);
}

function hideModal(element) {
  element.classList.remove('zoomIn')
  element.style.display = 'none';
  console.log(element);
}

function showMap(e) {
  e.preventDefault();
  showModal(closMap)
}

function hideMap(e) {
  e.preventDefault();
  hideModal(closMap)
}

function showCall(e) {
  e.preventDefault();
  showModal(closCall)
}

function hideCall(e) {
  e.preventDefault();
  hideModal(closCall)
}

// DATA
console.log(data)