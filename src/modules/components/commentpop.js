import FoodAPI from '../classes/api';
import displayComment from './displayComment';

const commentPop = async (mealId) => {
  const meal = await fetch(FoodAPI.getURL(mealId));
  displayComment(meal.json());
};
  // dispComment(meal);

export default commentPop;