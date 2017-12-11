import React from "react"
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
      console.log(json)
      this.setState({ categories: json })
    })
  }

  render() {
    return (
      <div className="categories">
        <h1>Kategorier</h1>
        {this.state.categories.map((item) => {
        return <Category
          title={item.title}
          count={item.product_count} />
        })}
      </div>
    )
  }
}

export default Categories
