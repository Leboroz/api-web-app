import commentPop from './commentpop';
import InvolvementAPI from '../classes/involvementapi';

export default function createCard(mealName, strMealImage, idMeal, likes) {
  const mealCard = document.createElement('div');
  mealCard.className = 'card';
  mealCard.id = `meal-${idMeal}`;
  likes = likes.length ? likes[0].likes : 0;

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
            <span><span class="likes-counter">${likes}</span> likes</span>
        </div>
    </article>
    <button class="btn comment-btn" type="button">Comments</button>`;

  mealCard.append(mealImage, mealCardBody);

  const likeButton = mealCardBody.querySelector('.like-button');
  likeButton.addEventListener('click', (e) => {
    const { target } = e;
    if (target.className === 'fas fa-heart') {
      target.classList.add('pop');
      InvolvementAPI.setLike(`${idMeal}`).then(() => {
        const like = mealCardBody.querySelector('.likes-counter');
        like.innerHTML = likes + 1;
      });

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
