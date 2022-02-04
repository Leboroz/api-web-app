import FoodAPI from './modules/classes/api';
import createCard from './modules/components/card';
import grid from './modules/components/grid';
import subHeader from './modules/components/list-counter';
import './scss/style.scss';
import InvolvementAPI from './modules/classes/involvementapi';

document.querySelector('main').append(subHeader, grid);

FoodAPI.getRandom().then(({ meals }) => {
  InvolvementAPI.getLikes().then((likes) => {
    for (let i = 0; i < 12; i += 1) {
      if (!meals[i]) break;
      const { strMeal, strMealThumb, idMeal } = meals[i];
      const foundLikes = likes.filter((result) => result.item_id === idMeal);
      grid.appendChild(createCard(strMeal, strMealThumb, idMeal, foundLikes));
    }
  });
});
