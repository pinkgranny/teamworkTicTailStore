import React from "react"
import "./products.js"
import "./product.css"

export default class ProductPage extends React.Component {

  render() {
    return (
      <div className="ProductPage">
        <p>Breadcrumb path placeholder</p>

        {<div className="imageHolder" style={{backgroundImage:`url(${this.props.prodImage})` }}>
        </div>}

        <div className="product-info">
          <h1>{this.props.prodName}
          </h1>
          <h2>Product details</h2>
          <p>{this.props.prodDescription}</p>
        </div>
      </div>
    )
  }

}
