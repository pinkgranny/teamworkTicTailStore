import React from "react"
import Products from "./products"
import "./../index.css"
import Categories from "./categories"

const productsJson = require("./../products.json")

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  updateCart(productId) {
    this.setState({
      myArray: [...this.state.myArray, 'new value'] })
    this.setState({
      cart: productId
    })
  }

  render() {
    return (

      <div className="App">
        <div className="header">
          <div className="hamburger">
            Hamburger
          </div>
          <div className="logo">
            Logo
          </div>
          <button id="headerButton">
            <i className="fa fa-shopping-cart" />
            {this.state.cart}
          </button>
        </div>

        <Categories />

        <div className="page">

          <div className="navigation">
            Navigation
          </div>

          <div className="productPage">
            <div className="hero">
              Hero
            </div>

            <Products updateProducts={this.updateCart.bind(this)} />
          </div>
        </div>
      </div>
    )
  }

}

export default App
