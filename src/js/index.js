// import 'normalize-scss'
// import "@fortawesome/fontawesome-free/js/all"
import "../js/data"
import '../style/index.scss'
import '../img/open-menu-1.png'
import "../img/favicon.png"
import "../img/facebook.svg"
import "../img/instagram.svg"
import "../img/google-maps.svg"
import "../img/telephone.svg"
import "../img/1.jpg"
import "../img/2.jpg"
import "../img/3.jpg"
import data from "../js/data"

import WOW from 'wow.js';

const wow = new WOW({
  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

// ICON
// import {
//   showMap,
//   hideMap,
//   showCall,
//   hideCall
// } from './click';



// DATA

const mian = document.querySelector('.main')

function getData(lst) {
  lst.forEach(element => {
    createArticle(element.title, element.description, element.id)
  });
}

function createArticle(title, description, id) {
  mian.insertAdjacentHTML("afterbegin",
    `
    <article class="article wow scale-in-ver-bottom" data-wow-offset="222">
    <div class="article__img">
      <img src="./img/${id}.jpg" alt="" class="img" />
    </div>
    <div class="article__content">
      <a href="" class="article__link">
        <h2 class="article__title h2">
          ${title} <i class="fas fa-long-arrow-alt-right"></i>
        </h2>
      </a>
      <p class="article__text">${description}</p>
    </div>
    </article>
    `
  )
}
getData(data)


// CLICK ON SOCIAL

const social = document.querySelector('.social')
social.addEventListener('click', getEventOnIcon)

function getEventOnIcon(event) {
  const parent = event.target.parentNode;
  if (parent.getAttribute('id') == "menu") {
    event.preventDefault()
    showHideModal('.menu')
  } else if (parent.getAttribute('id') == "map") {
    event.preventDefault()
    showHideModal('.map')

  } else if (parent.getAttribute('id') == "telephone") {
    event.preventDefault()
    showHideModal('.call')
  }
}

function showHideModal(cls) {
  const element = document.querySelector(cls)
  const clos = element.querySelector('.fa-times')

  function closeWindow() {
    element.classList.remove('zoomIn')
    element.style.display = 'none';
  }

  element.classList.add('zoomIn')
  element.style.display = 'block'
  clos.addEventListener('click', function () {
    closeWindow()
  })

  document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape' || event.keyCode == 27) {
      closeWindow()
    }
  });
}

// SEND CALL FORM
const formFooter = document.forms.form_footer;
const formSicial = document.forms.form_social;

formSicial.addEventListener("submit", getValueOnCall)
formFooter.addEventListener("submit", getValueOnCall)

function sendCallForm(obj) {
  const thank = document.querySelector('.thank')
  thank.textContent = `${obj.name} спасибо за Ваше обращение, мы обязательно с вами свяжемся в течении 10 минут.`
  thank.style.display = 'block'
  setTimeout(function () {
    thank.style.display = 'none'
  }, 4000);
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

function getValueOnCall(e) {
  // console.log(e.target);
  e.preventDefault();
  e.stopPropagation()
  const name = e.target[0].value
  const telephone = e.target[1].value
  const comment = e.target[2].value

  function errorInput(field) {
    field.classList.add('shake')
    setTimeout(function () {
      field.classList.remove('shake')
    }, 1000);
  }

  if (!name && !telephone) {
    errorInput(e.target)
  } else if (!name) {
    errorInput(e.target[0])
  } else if (!telephone) {
    errorInput(e.target[1])
  } else {


    const obj = {
      form_name: e.target.getAttribute("name"),
      name,
      telephone,
      comment
    }
    sendCallForm(obj)
    e.target[0].value = ''
    e.target[1].value = ''


  }
}