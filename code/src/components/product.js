import React from "react"
import "./../product.css"

class Product extends React.Component {

  render() {
    console.log(this.props.updateProducts)
    return (
      <div className="oneProduct">

        <div className="productTop">
          <h1 className="name">
            {this.props.prodName}
          </h1>

          <div className="description">
            <h1 className="name2">
              {this.props.prodName}
            </h1>
            {this.props.prodDescription}
          </div>

{<div className="imageHolder" style={{backgroundImage:`url(${this.props.prodImage})` }}>
          </div>}
        </div>

        <div className="productBottom">
          <div className="priceHolder">
            <div className="price">
              {this.props.prodPrice}
            </div>

            <button onClick={()=> {
              this.props.updateProducts(this.props.prodId)
            }}
              className="button">
              Köp
            </button>
          </div>

          <div className="deliveryTime">
            {this.props.prodOrgPrice}
          </div>
        </div>

      </div>
    )
  }

}

export default Product
