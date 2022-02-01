import FoodAPI from './modules/classes/api';
import './scss/style.scss';

FoodAPI.getRandomList().then(console.log)