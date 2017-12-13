import React from "react"
import { Link } from "react-router-dom"
import "./product.css"

class Product extends React.Component {

  render() {
    return (
      <div className="oneProduct">

        <div className="productTop">
          <Link className="link" to={`/products/${this.props.prodId}`}>
            <h2 className="product-name">
              {this.props.prodName}
            </h2>
          </Link>
          <div className="description">
            <h2> Product details</h2>
            {/* <h1 className="name2">
              {this.props.prodName}
            </h1> */}
            {this.props.prodDescription}
          </div>

          <div className="imageHolder" style={{ backgroundImage: `url(${this.props.prodImage})` }} />
        </div>

        <div className="productBottom">
          <div className="priceHolder">
            <div className="price">
              <h5>{this.props.prodPrice} kr</h5>
            </div>

            <button
              onClick={() => {
                this.props.updateProducts(this.props.prodId, this.props.variationId)
              }
              }
              className="button">
              Köp
            </button>
          </div>

          <div className="deliveryTime">
            {this.props.prodOrgPrice} kr
          </div>
        </div>

      </div>
    )
  }

}

export default Product
