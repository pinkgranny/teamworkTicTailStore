import React from "react"

console.log("I'm in Product Component")

class Product extends React.Component {

  render() {
    console.log(this.props)
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

            <div className="imageHolder" style={{backgroundImage:`url(${this.props.prodImage})` }}>
            </div>

            <div className="list">
              <li className="listItem">
                {this.props.prodType}
              </li>
              <li className="listItem">
                {this.props.prodSubstance}
              </li>
              <li className="listItem">
                {this.props.prodSize}
              </li>
              <li className="listItem">
                {this.props.prodNumberInPack}
              </li>
            </div>
          </div>

          <div className="productBottom">
            <div className="priceHolder">
              <div className="price">
                {this.props.prodPrice} kr
              </div>

              <button className="button">
              Köp
              </button>
            </div>

            <div className="deliveryTime">
              {this.props.prodDeliveryTime}
            </div>
          </div>

        </div>
    )
  }

}

export default Product
