const displayComment = (meal) => {
  meal.then((mealObj) => {
    const selectMeal = mealObj.meals[0];
    console.log(mealObj)
    const commentModal = document.createElement('div');
    commentModal.className='modal-popup'
    commentModal.innerHTML=`
    <img src="${selectMeal.strMealThumb}" alt="Meal image">
    <h1>${selectMeal.strMeal}</h1>
    <p>${selectMeal.strInstructions}</p>
    <h3>Commets</h3>
    <p> ...list of comments</p>
    <h3>Add a Comment>
    <input type="text" id='comment-mame' placeholder="Your Name">
    <input type="text" id='comment-content' placeholder="Your Insights">
    `
    const main = document.querySelector('main');
    main.appendChild(commentModal);
  })
  }
export default displayComment;