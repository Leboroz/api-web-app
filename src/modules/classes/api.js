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


  static getURL(id) {
    return this.URL + this.BY_ID + id;
  }

  static CATEGORIES_LIST = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ]

  static getRandom() {
    return fetch(
      this.URL
        + this.FILTER_BY_CATEGORY
        // + this.CATEGORIES_LIST[Math.floor(Math.random() * 13)],
        + this.CATEGORIES_LIST[1],
    ).then((res) => res.json());
  }

}

