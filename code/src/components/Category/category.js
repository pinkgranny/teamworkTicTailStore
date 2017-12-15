import React from "react"
import { Link } from "react-router-dom"

console.log("I'm in Category Component")

class Category extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="oneCategory">

        <h2 className="category-navigation">
          <Link onClick={this.props.onClick} className="link" to={`/${this.props.title}`}>{this.props.title}</Link>
        </h2>

      </div>
    )
  }

}

export default Category
