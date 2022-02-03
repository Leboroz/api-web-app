import InvolvementAPI from '../classes/involvementapi';
import commentsToList from './commentsToList';
import Comment from '../classes/comment';

const displayComment = (meal) => {
  meal.then((mealObj) => {
    const selectMeal = mealObj.meals[0];
    let comments = InvolvementAPI.getComments(selectMeal.idMeal);
    const commentModal = document.createElement('div');
    commentModal.className = 'modal-popup';
    commentModal.id = 'comment-popup';
    commentModal.innerHTML = `
    <img src="${selectMeal.strMealThumb}" alt="Meal image">
    <h1>${selectMeal.strMeal}</h1>
    <p>${selectMeal.strInstructions}</p>
    <h2>Comments</h2>
    ${commentsToList(comments)}
    <h3>Add a Comment>
    <input type="text" id='comment-name' placeholder="Your Name">
    <input type="text" id='comment-content' placeholder="Your Insights">
    <button id="add-comment-btn" type="button">Submit</button>;
    `;
    const main = document.querySelector('main');
    main.appendChild(commentModal);

    const addComment = document.getElementById('add-comment-btn');
    addComment.addEventListener('click', () => {
      console.log(selectMeal.idMeal);
      const comment = new Comment(selectMeal.idMeal);
      console.log(comment);
      comments = InvolvementAPI.addComments(comment);
      console.log(comments.JSON());
    });
  });
};
export default displayComment;