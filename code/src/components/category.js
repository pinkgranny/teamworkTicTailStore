import React from "react"

console.log("I'm in Category Component")

class Category extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="oneCategory">

        <h1 className="name">
          <a href="url"> {this.props.title}</a>
        </h1>

      </div>
    )
  }

}

export default Category
