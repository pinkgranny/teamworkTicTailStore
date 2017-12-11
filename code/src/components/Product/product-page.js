import React from "react"
import "./products.js"
import "./product.css"

export default class ProductPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znv/products").then((response) => {
      return response.json()
      const foundProduct = this.state.products.find(p => (p.title === this.props.match.params.prodName))
    // this.setProduct(product)
    }).then((foundProduct) => {
    // console.log(json)
      this.setState({
        products: foundProduct
      })
    })
  }

  setProduct = (product) => {
    this.setState({
      product
    })
  }

  render() {
    return (
      <div className="ProductPage">
        <p>Breadcrumb path placeholder</p>

        {<div className="imageHolder" style={{backgroundImage:`url(${this.state.product.prodImage})` }}>
        </div>}

        <div className="product-info">
          <h1>{this.state.product.prodName}
          </h1>
          <h2>Product details</h2>
          <p>{this.state.product.prodDescription}</p>
        </div>
      </div>
    )
  }

}
