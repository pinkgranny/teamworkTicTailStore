import React from "react"

console.log("I'm in Category Component")

class Category extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="oneCategory">

        <h1 className="name">
          {this.props.title}
        </h1>

      </div>
    )
  }

}

export default Category
