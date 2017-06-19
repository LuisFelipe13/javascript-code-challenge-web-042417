class CommentList {
  constructor() {
    this.comments = []
  }

  addComment(add_comment) {
    const newComment = new Comment(add_comment)
    this.comments.push(newComment)
  }

  render() {
    let comments_inputed = this.comments.map(comment => comment.render()).join('')
    return `<ul>${comments_inputed}</ul>`
  }
}
