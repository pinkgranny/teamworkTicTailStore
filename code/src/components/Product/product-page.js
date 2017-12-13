import React from "react"
import "./products.js"
import "./product.css"

export default class ProductPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      oneProduct: {
        images: [
          { url: null }
        ]
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
    const id = this.props.match.params.productPage
    // console.log(id)
    fetch(`https://api.tictail.com/v1.25/stores/5znv/products/${id}`).then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json)
      this.setState({ oneProduct: json })
    })
  }

  formatPrice(price) {
    return (price / 100).toFixed(2)
  }

  render() {
    return (
      <div className="oneProductPage">
        <div className="productInfo">
          <h1>{this.state.oneProduct.title}</h1>
          <h3>Product description</h3>
          <p> {this.state.oneProduct.description}</p>

          <div className="productBottom">
            <div className="priceHolder">
              <div className="price">
                {this.formatPrice(this.state.oneProduct.price)}
              </div>

              <button
                onClick={() => {
                  this.props.updateCart(this.state.oneProduct.id, this.state.oneProduct.variations[0].id)
                }
                }
                className="button">
                Köp
              </button>
            </div>
          </div>

        </div>

        <div className="productImage" style={{ backgroundImage: `url(${this.state.oneProduct.images[0].url})` }} />
      </div>
    )
  }

}
