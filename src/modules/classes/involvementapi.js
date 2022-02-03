export default class InvolvementAPI {
  static URL =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'

  static APP_ID = 'zjDNOoNc6riMp48wH4yB/'

  static LIKES = 'likes/'

  static COMMENTS = 'comments'

  static getComments

  static getLikes() {
    return fetch(this.URL + this.APP_ID + this.LIKES).then((res) => res.json())
  }

  static setLike(id) {
    return fetch(this.URL + this.APP_ID + this.LIKES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    })
  }
}
