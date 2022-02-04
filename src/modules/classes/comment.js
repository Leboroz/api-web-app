export default class Comment {
  constructor(id) {
    this.item_id = id;
    this.username = document.getElementById('comment-name').value;
    this.comment = document.getElementById('comment-content').value;
  }
}
