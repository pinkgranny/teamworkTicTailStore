import React from "react"
import { Link } from "react-router-dom"
import Category from "./category"

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znv/categories").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ categories: json })
    })
  }

  render() {
    return (
      <div className="categories">
        <h2 className="category-navigation">
          <Link className="link" to="/">All products</Link>
          {this.state.categories.map((item) => {
            return <Category
              title={item.title}
              count={item.product_count} />
          })}
          <Link className="link" to="/sale">Sale</Link>
        </h2>
      </div>
    )
  }
}

export default Categories
