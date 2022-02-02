import FoodAPI from './classes/api.js';
import displayComment from './displayComment.js';

const commentPop =  async (mealId) => {
  const meal = await fetch(FoodAPI.getURL(mealId));
  displayComment(meal.json())  
};
  // dispComment(meal);

export default commentPop;