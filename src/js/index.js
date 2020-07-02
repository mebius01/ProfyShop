// import 'normalize-scss'
import '../style/index.scss'
import "../img/favicon.png"
// import "../img/logo.png"
import "../img/facebook.svg"
import "../img/instagram.svg"
import "../img/google-maps.svg"
import "../img/telephone.svg"
// import "../img/open-menu-1.svg"
// import "../img/open-menu-1.png"
// import "../img/address.svg"
// import "../img/productivity.svg"
// import "../img/mail.svg"
// import "../img/phone.svg"
// import "../img/time-and-date.svg"
import "../img/1.jpg"
import "../img/2.jpg"
import "../img/3.jpg"


const closs = document.querySelector('.map')
const mapIcon = document.getElementById('mapIcon')


mapIcon.addEventListener('click', showMap)
closs.addEventListener('click', hideMap)

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
  showModal(closs)
}

function hideMap(e) {
  e.preventDefault();
  hideModal(closs)
}