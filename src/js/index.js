// import 'normalize-scss'
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
import {
  showMap,
  hideMap,
  showCall,
  hideCall
} from './click';



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