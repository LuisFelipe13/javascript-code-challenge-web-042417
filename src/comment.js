class Comment {
  constructor(comment) {
    this.comment = comment
  }

  render() {
    return `<li>${this.comment}</li>`
  }
}
