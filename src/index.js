import FoodAPI from './modules/classes/api';
import createCard from './modules/components/card';
import grid from './modules/components/grid';
import './scss/style.scss';

document.querySelector('main').appendChild(grid)

FoodAPI.getRandomList().then(arr => arr.forEach(({ strMeal, strMealThumb }) => {
    grid.appendChild(createCard(strMeal, strMealThumb))
}))