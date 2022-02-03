import commentPop from './commentpop';

export default function createCard(mealName, strMealImage, idMeal) {
  const mealCard = document.createElement('div');
  mealCard.className = 'card';
  mealCard.id = `meal-${idMeal}`;

  const mealImage = document.createElement('figure');
  mealImage.className = 'img-wrapper';
  mealImage.innerHTML = `<img src="${strMealImage}">`;

  const mealCardBody = document.createElement('div');
  mealCardBody.className = 'card-body';
  mealCardBody.innerHTML = `
    <article class="card-header">
        <h2 class="card-title">${mealName}</h2>
        <div class="like-button">
            <i class="fas fa-heart"></i>
            <span><span class="counter">0</span> likes</span>
        </div>
    </article>
    <button class="comment-btn" type="button">Comments</button>`;

  mealCard.append(mealImage, mealCardBody);

  const likeButton = mealCardBody.querySelector('.like-button');
  likeButton.addEventListener('click', (e) => {
    const { target } = e;
    if (target.className === 'fas fa-heart') {
      target.classList.add('pop');
      setTimeout(() => {
        target.classList.remove('pop');
      }, 500);
    }
  });

  const commentButton = mealCardBody.querySelector('.comment-btn');
  commentButton.addEventListener('click', () => {
    commentPop(mealCard.id.slice(5));
  });
  return mealCard;
}
