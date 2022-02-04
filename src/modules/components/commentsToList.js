export default function commentsToList(comments) {
  let list = '';
  console.log(comments.lenth);
  if (comments.length) {
    comments.forEach((c) => {
      list += `<h4>${c.username}<span class='date'>${c.creation_date}</span></h4>
    <p class='comment'>${c.comment}</p>`;
    });
  }
  return list;
}