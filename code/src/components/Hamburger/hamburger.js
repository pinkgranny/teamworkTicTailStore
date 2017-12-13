import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"
import Category from "../Category/category"
import "./style.css"

class Hamburger extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      navigationOpen: false
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

  toggleNavigation() {
    const toggleMode = !this.state.navigationOpen
    this.setState({ navigationOpen: toggleMode})
  }

  onClickLink() {
    this.setState({ navigationOpen: false})
  }

  render() {
    console.log(this.state.navigationOpen)
    return (
      <div className="Header">
        <input onClick={this.toggleNavigation.bind(this)} type="checkbox" id="hamburger-toggle" />
        <label className="hamburger" htmlFor="hamburger-toggle">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </label>
        <div className={classnames("menu", {
          "menuIsOpen": this.state.navigationOpen
        })}>
          <h2>
            <Link onClick={this.onClickLink.bind(this)} className="link" to="/">All products</Link>
            {this.state.categories.map((item) => {
              return <Category
                onClick={this.onClickLink.bind(this)}
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
