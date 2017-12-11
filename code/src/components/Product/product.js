import React from "react"
import { Link } from "react-router-dom"
import "./product.css"

class Product extends React.Component {

  render() {
    console.log(this.props.updateCart)
    return (
      <div className="oneProduct">
        <Link to={`/${this.props.title}`}>

        <div className="productTop">
          <h1 className="name">
            {this.props.prodName}
          </h1>

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
              {this.props.prodPrice}
            </div>

            <button
              onClick={() => {
                this.props.updateCart(this.props.prodId)
              }
              }
              className="button">
              Köp
            </button>
          </div>

          <div className="deliveryTime">
            {this.props.prodOrgPrice}
          </div>
        </div>
        </Link>

      </div>
    )
  }

}

export default Product
