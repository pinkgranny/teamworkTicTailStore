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

  updateCart(productId, variationId) {
    console.log(productId, variationId)
    this.setState({
      cart: [...this.state.cart, {
        productId,
        variationId
      }]
    })
  }

  goToCart() {
    fetch("https://api.tictail.com/v1.26/carts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        store_id: this.state.store.id,
        attribution: "marketplace",
        user_id: null,
        items: this.state.cart.map((item) => {
          return {
            product_id: item.productId,
            variation_id: item.variationId,
            quantity: 1
          }
        })
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json)
      window.location.href = `https://www.tictail.com/checkout?cart_token=${json.token}`
    })
  }

  render() {
    //  if ({this.state.cart.length} > 0) {
    //   <div className="checkOutButton" onClick={this.goToCart.bind(this)}>
    //     Betala
    //   </div>
    // }
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
                <Cart
                  productId={item.productId} />)}
                <div className="checkOutButton" onClick={this.goToCart.bind(this)}>
                  Betala
                </div>
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
                  <Filter
                    {...routeProps}
                    store={this.state.store}
                    updateCart={this.updateCart.bind(this)} />
                } />
              <Route
                exact
                path="/:cate"
                render={routeProps =>
                  <Filter
                    {...routeProps}
                    store={this.state.store}
                    updateCart={this.updateCart.bind(this)} />
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
