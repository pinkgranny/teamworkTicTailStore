import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./../index.css"
import Categories from "./Category/categories"
import Store from "./Store/store"
import Cart from "./Cart/cart"
import Filter from "./Product/filterList"
import ProductPage from "./Product/product-page"
import Hamburger from "./Hamburger/hamburger"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      store: {
        wallpapers: {
          iphone: {}
        }
      }
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znv").then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json)
      this.setState({ store: json })
    })
  }

  updateCart(productId) {
    this.setState({
      cart: [...this.state.cart, productId]
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <div className="hamburger">
              <Hamburger />
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
              {this.state.cart.map(item =>
                <li>
                  <Cart
                    productId={item.id} />
                </li>)}
            </div>

          </div>

          <div className="page">

            <div className="navigation">
              <div className="storeName">
                <Store name={this.state.store.name} />
              </div>
              <Categories />
            </div>

            <div className="productPage">

              <Route
                exact
                path="/"
                render={routeProps =>
                  <Filter {...routeProps} store={this.state.store}
                    updateCart={this.updateCart.bind(this)} />
                } />
              <Route
                exact
                path="/:cate"
                render={routeProps =>
                  <Filter {...routeProps} store={this.state.store} updateCart={this.updateCart.bind(this)} />
                } />
              <Route
                path="/products/:productPage"
                render={routeProps =>
                  <ProductPage {...routeProps} updateCart={this.updateCart.bind(this)} />
                } />

            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
