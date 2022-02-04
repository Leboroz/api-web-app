import FoodAPI from './modules/classes/api';
import createCard from './modules/components/card';
import grid from './modules/components/grid';
import subHeader from './modules/components/list-counter';
import './scss/style.scss';
import commentPop from './modules/components/commentpop';


document.querySelector('main').append(subHeader, grid);

FoodAPI.getRandom().then(({ meals }) => {
  for (let i = 0; i < 12; i += 1) {
    if (!meals[i]) break;
    const { strMeal, strMealThumb, idMeal } = meals[i];
    grid.appendChild(createCard(strMeal, strMealThumb, idMeal));
  }
});

