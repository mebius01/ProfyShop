// import "../img/1.jpg"
// import "../img/2.jpg"
// import "../img/3.jpg"
// const data = [{
//     id: 1,
//     title: "Satara",
//     description: "Израильская косметика «Satara» создана на основе натуральных растительных компонентов, минералов Мертвого моря и жемчужной пудры.",
//     img: "../img/1.jpg"
//   },
//   {
//     id: 2,
//     title: "La Rossa",
//     description: "Профессиональные средства, в соотношении цена-качество, испанского бренда La Rossa для проведения процедуры высококачественного шугаринга.",
//     img: "../img/2.jpg"
//   },
//   {
//     id: 3,
//     title: "Test long Title and Description",
//     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora vero dolores ab tenetur ipsum or sequi eos et possimus ipsa, cum commodi unde quae maiores minima veniam facere obcaecati excepturi. Lorem ipsum dolor",
//     img: "../img/3.jpg"
//   }
// ]

// https://cors-anywhere.herokuapp.com/

fetch("http://127.0.0.1:8000/api/v1/?format=json")
  .then(response => {
    console.log(response.status);
    return response.json();
  })
  .then(data => {
    getData(data)
  })
  .catch(error => console.error(error))
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
// export {
//   getData,
//   data
// }