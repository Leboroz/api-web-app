export default class InvolvementAPI {
  static URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  static APP_ID = 'zjDNOoNc6riMp48wH4yB/';

  static LIKES = 'likes/';

  static COMMENTS = 'comments?item_id=';

  static getComments(id) {
    return fetch(this.URL + this.APP_ID + this.COMMENTS + id)
    .then((comments) => comments.json());
  }

  static addComments = async (comment) => {
    await fetch(`${this.URL + this.APP_ID}comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const comments = await this.getComments(comment.item_id);
    return comments;
  }
}