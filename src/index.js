class App {
  constructor() {
    this.commentContainer = document.getElementById("comment-list")
    this.commentText = document.getElementById("add_comment")
    this.submitComment = document.getElementById("submit-comment")
    this.submitComment.addEventListener('click', this.onSubmit.bind(this))
    this.commentList = new CommentList()
  }

  onSubmit() {
    event.preventDefault()
    const add_comment = this.commentText.value
    this.commentList.addComment(add_comment)
    this.commentText.value = ''
    this.render()
  }

  render() {
    return this.commentContainer.innerHTML = this.commentList.render()
  }
}

const runApp = new App()

runApp.render()
