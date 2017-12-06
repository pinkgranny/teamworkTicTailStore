import React from "react"
import Products from "./products"
import "./../index.css"
import Categories from "./categories"
import Store from "./store"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      store: {},
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znv").then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json)
      this.setState({
        store:json })
    })
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

        <div className="page">

          <div className="navigation">
            <Categories />
            <Store name={this.state.store.name} />
          </div>

          <div className="productPage">
            <div className="hero">
              {/* <Hero hero={this.state.store.wallpapers.iphone.url} /> */}
            </div>

            <Products updateProducts={this.updateCart.bind(this)} />
          </div>
        </div>
      </div>
    )
  }

}

export default App
