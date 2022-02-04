import InvolvementAPI from '../classes/involvementapi';
import commentsToList from './commentsToList';
import Comment from '../classes/comment';

const displayComment = (meal) => {
  meal.then(async(mealObj) => {
    const selectMeal = mealObj.meals[0];
    const commentModal = document.createElement('div');
    commentModal.className = 'modal-popup';
    commentModal.id = 'comment-popup';
    commentModal.innerHTML = `
    <img src="${selectMeal.strMealThumb}" alt="Meal image">
    <h1>${selectMeal.strMeal}</h1>
    <p>${selectMeal.strInstructions}</p>
    <h3>Add a Comment</h3>
    <input type="text" id='comment-name' placeholder="Your Name">
    <input type="text" id='comment-content' placeholder="Your Insights">
    <button id="add-comment-btn" type="button">Submit</button>;
    <h2>Comments</h2>`;
    const main = document.querySelector('main');
    main.appendChild(commentModal);

    let comments = await InvolvementAPI.getComments(selectMeal.idMeal);

    console.log(comments);
    const commentList = document.createElement('div');
    commentList.className = 'comment-list';
    commentList.innerHTML = commentsToList(comments);
    commentModal.appendChild(commentList);
    
    // const addComment = document.getElementById('add-comment-btn');
    // addComment.addEventListener('click', () => {
    //   const comment = new Comment(selectMeal.idMeal);
    //   comments = InvolvementAPI.addComments(comment);
    //   commentList.innerHTML = commentsToList(comments);
    //   console.log(comments);
    // });
  });
};
export default displayComment;