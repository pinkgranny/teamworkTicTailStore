import React from "react"
import { Link } from "react-router-dom"
import "./category.css"

console.log("I'm in Category Component")

class Category extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="oneCategory">

        <h1 className="name">
          {/* <a href="url"> {this.props.title}</a> */}
          <Link to={`/${this.props.title}`}>{this.props.title}</Link>
        </h1>

      </div>
    )
  }

}

export default Category
