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
        <Store />
        <Categories />
        <Products updateProducts={this.updateCart.bind(this)} />

      </div>
    )
  }

}

export default App
