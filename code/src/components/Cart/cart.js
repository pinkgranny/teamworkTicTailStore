import React from "react"

class Cart extends React.Component {

  render() {
    console.log(this)
    return (
      <div className="productCart">
        <div className="cartInfo">
          {this.props.prodName}
        </div>
        {/* <div className="cartInfo">
          {this.props.title}
        </div>

        <div className="cartPrice">
          {this.props.price}
        </div> */}
      </div>
    )
  }

}

export default Cart
