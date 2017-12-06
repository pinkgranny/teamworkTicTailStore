import React from "react"
import Products from "./products"
import "./../index.css"
import Categories from "./categories"
import Store from "./store"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  updateCart(productId) {
    this.setState({
      cart: [...this.state.cart, productId]
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

          <input id="cartBox_id" type="checkbox" className="cartBox" />

          <label className="cartButton" htmlFor="cartBox_id">
            <div className="cartButton">
              <i className="fa fa-shopping-cart" />
              {this.state.cart.length} products
            </div>
          </label>

          <div className="cartList">
            {this.state.cart}
          </div>

        </div>

        <div className="page">

          <div className="navigation">
            <Categories />
            <Store />
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
