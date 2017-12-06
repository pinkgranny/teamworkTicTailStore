import React from "react"
import Product from "./product"

class Products extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znv/products").then((response) => {
      return response.json()
    }).then((json) => {
    console.log(json)
    this.setState({
      products: json
    })
  })
}

  render() {
    console.log(this)
    return (
      <div className="page">

        <div className="navigation">
          Navigation
        </div>

        <div className="productPage">
          <div className="hero">
            Hero
          </div>

          <div className="productHeader">
            Visar {this.state.products.length} produkter
          </div>

          <div className="productList">

            {this.state.products.map((item) => {
              return <Product
                updateProducts={this.props.updateProducts}
                prodName={item.title}
                prodImage={item.images[0].url}
                prodDescription={item.description}
                prodPrice={item.price}
                prodOrgPrice={item.original_price}
                prodId={item.id}
              />
            })}

          </div>
        </div>
      </div>
    )
  }

}

export default Products
