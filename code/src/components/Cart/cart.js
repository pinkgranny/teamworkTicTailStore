import React from "react"
import "./cart.css"

class Cart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      oneProduct: {
        images: [{}]
      }
    }
  }

  componentDidMount() {
    this.setProductFromApi()
  }

  componentWillReceiveProps() {
    this.setProductFromApi()
  }

  setProductFromApi = () => {
    const id = this.props.productId
    // console.log(id)
    fetch(`https://api.tictail.com/v1.25/stores/5znv/products/${id}`).then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json)
      this.setState({ oneProduct: json })
    })
  }

  formatPrice(price) {
    return (price / 100).toFixed()
  }

  render() {
    return (
      <div className="productCart">
        <div className="cartInfo">
          <img className="miniImage" src={this.state.oneProduct.images[0].url} />
          <h1>{this.state.oneProduct.title}</h1>
          {this.formatPrice(this.state.oneProduct.price)} kr
        </div>
      </div>
    )
  }

}

export default Cart
