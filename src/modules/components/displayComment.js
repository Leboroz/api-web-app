import InvolvementAPI from '../classes/involvementapi';
import commentsToList from './commentsToList';
import Comment from '../classes/comment';

const displayComment = (meal) => {
  meal.then((mealObj) => {
    const selectMeal = mealObj.meals[0];
    console.log(selectMeal.idMeal);
    const comments = InvolvementAPI.getComments(selectMeal.idMeal);
    console.log(comments, typeof comments);
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
    <input type="text" id='comment-mame' placeholder="Your Name">
    <input type="text" id='comment-content' placeholder="Your Insights">
    `;
    const main = document.querySelector('main');
    main.appendChild(commentModal);
  });
};
export default displayComment;