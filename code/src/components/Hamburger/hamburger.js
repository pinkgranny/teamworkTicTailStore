import React from "react"
import { Link } from "react-router-dom"
import Category from "../Category/category"
import "./style.css"

class Hamburger extends React.Component {

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
      console.log(json)
      this.setState({ categories: json })
    })
  }

  render() {
    return (
      <div className="Header">
        <input type="checkbox" id="hamburger-toggle" />
        <label className="hamburger" htmlFor="hamburger-toggle">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </label>
        <div className="menu">
          <h2>
            <Link className="link" to="/">All products</Link>
          {this.state.categories.map((item) => {
            return <Category
              title={item.title}
              count={item.product_count} />
          })}
          </h2>
        </div>
      </div>
    )
  }

}

export default Hamburger
