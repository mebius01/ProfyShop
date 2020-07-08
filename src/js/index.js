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

// DATA category
// import {
//   getData,
//   data
// } from "../js/data"
// getData(data)

import "../js/data"

//  WOW plugin
import wow from './plugins'
wow.init();

// CLICK ON SOCIAL
import showHideModal from './click'
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

// SEND CALL FORM
const formFooter = document.forms.form_footer;
const formSicial = document.forms.form_social;

formSicial.addEventListener("submit", getValueOnCall)
formFooter.addEventListener("submit", getValueOnCall)

function sendCallForm(obj) {
  const thank = document.querySelector('.thank')
  thank.innerHTML = `
    <p style="color: #e74c3c;">${obj.name}</p>
    <p>спасибо за Ваше обращение, мы обязательно с Вами свяжемся в течении </p>
    <p style="color: #e74c3c;">10 минут</p>
    `
  thank.style.display = 'block'
  setTimeout(function () {
    thank.style.display = 'none'
  }, 5000);
  fetch('http://127.0.0.1:8000/api/v1/post/', {
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

  e.preventDefault();
  e.stopPropagation()
  const name = e.target[0].value
  const telephone = e.target[1].value
  let comment = e.target[2].value

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
    if (!comment) {
      comment = 'Пустой коментарий'
      const obj = {
        // form_name: e.target.getAttribute("name"),
        name,
        telephone,
        comment
      }
      sendCallForm(obj)
    } else {
      const obj = {
        // form_name: e.target.getAttribute("name"),
        name,
        telephone,
        comment
      }
      sendCallForm(obj)
    }
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
  }
}