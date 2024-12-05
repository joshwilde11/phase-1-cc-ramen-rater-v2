const renderRamen = (ramen) => {
  const ramenMenu = document.querySelector('#ramen-menu');
  const img = document.createElement('img');
  img.src = ramen.image;
  img.alt = ramen.name;
  ramenMenu.appendChild(img);

  img.addEventListener('click', () => {
    const detailImage = document.querySelector('.detail-image');
    const detailName = document.querySelector('.name');
    const detailRestaurant = document.querySelector('.restaurant');
    const detailsRating = document.querySelector('#rating-display');
    const detailsComment = document.querySelector('#comment-display');

    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    detailsRating.textContent = ramen.rating;
    detailsComment.textContent = ramen.comment;
  });
};

const addSubmitListener = () => {
  const form = document.querySelector('#new-ramen');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newRamen = {
      name: event.target.name.value,
      restaurant: event.target.restaurant.value,
      image: event.target.image.value,
      rating: event.target.rating.value,
      comment: event.target.comment.value,
    };
    renderRamen(newRamen);
    form.reset();
  });
};

const displayRamens = () => {
  fetch('http://localhost:8000/ramens')
    .then(resp => resp.json())
    .then(jsonData => {
      jsonData.forEach(ramenObj => {
        renderRamen(ramenObj);
      });
    });
};

const main = () => {
  displayRamens();
  addSubmitListener();
};

document.addEventListener('DOMContentLoaded', main);