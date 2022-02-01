export default class FoodAPI {
    static URL = 'https://www.themealdb.com/api/json/v1/1/'
    static BY_NAME = 'search.php?s='
    static BY_LETTER = 'search.php?f='
    static BY_ID = 'lookup.php?i='
    static RANDOM = 'random.php'
    static CATEGORIES = 'categories.php'
    static LIST_CATEGORIES = 'list.php?c=list'
    static LIST_AREA = 'list.php?a=list'
    static LIST_INGREDIENTS = 'list.php?i=list'
    static FILTER_BY_MAIN_INGREDIENT = 'filter.php?i='
    static FILTER_BY_CATEGORY = 'filter.php?c='
    static FILTER_BY_AREA = 'filter.php?a='

    static getRandom() {
      return fetch(this.URL + this.RANDOM).then(res => res.json())
    }

    static async getRandomList() {
        const mealList = []
        for (let i = 0; i < 10; i+=1) {
          await  this.getRandom().then(({ meals }) => mealList.push(meals[0]))
        }
        return mealList
    }
    static getMealByID(id) {
        return fetch(his.URL + this.BY_ID +id).then(meal => meal.jsan())
  }
}