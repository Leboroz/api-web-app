import InvolvementAPI from '../classes/involvementapi';
import commentsToList from './commentsToList';
import Comment from '../classes/comment';

const displayComment = (meal) => {
  meal.then(async (mealObj) => {
    const selectMeal = mealObj.meals[0];
    const background = document.createElement('article');
    background.className = 'modal';
    const commentModal = document.createElement('div');
    commentModal.className = 'modal-popup';
    commentModal.id = 'comment-popup';
    commentModal.innerHTML = `
    <button id="close-modal" data-close>✕</button>
    <figure class="img-wrapper">
      <img src="${selectMeal.strMealThumb}" alt="Meal image">
    </figure>
    <h1>${selectMeal.strMeal}</h1>
    <p>${selectMeal.strInstructions}</p>
    <h3>Add a Comment</h3>
    <input class="field" type="text" id='comment-name' placeholder="Your Name">
    <textarea class="field" id='comment-content' placeholder="Your Insights"></textarea>
    <button class="btn" id="add-comment-btn" type="button">Submit</button>
    <h2>Comments</h2>`;
    background.appendChild(commentModal);
    const main = document.querySelector('main');
    main.appendChild(background);
    document.querySelector('body').classList.add('hidden');

    let comments = await InvolvementAPI.getComments(selectMeal.idMeal);

    const commentList = document.createElement('div');
    commentList.className = 'comment-list';
    commentList.innerHTML = commentsToList(comments);
    commentModal.appendChild(commentList);

    const closeModal = commentModal.querySelector('#close-modal');

    closeModal.addEventListener('click', () => {
      background.remove();
      document.querySelector('body').classList.remove('hidden');
    });

    const addComment = document.getElementById('add-comment-btn');
    addComment.addEventListener('click', async () => {
      const comment = new Comment(selectMeal.idMeal);
      comments = await InvolvementAPI.addComments(comment);
      commentModal.removeChild(commentList);
      commentList.innerHTML = commentsToList(comments);
      commentModal.appendChild(commentList);
    });
  });
};
export default displayComment;
