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
    const productInfo = products.find(p => (p.prodId === this.props.match.params.id))
    this.setProduct(product)
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
