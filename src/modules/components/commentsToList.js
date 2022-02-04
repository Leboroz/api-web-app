const commentsToList = (comments) => {
  let list = 'no comments';
  if (comments.length) {
    list = `<h5>${comments.length}  comments</h5>`;
    comments.forEach((c) => {
      list += `<h4>${c.username}<span class='date'>${c.creation_date}</span></h4>
    <p class='comment'>${c.comment}</p>`;
    });
  }
  return list;
};

export default commentsToList;