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
            {/* Visar {productsJson.products.length} produkter */}
          </div>

          <div className="productList">

            {this.state.products.map((item) => {
              return <Product
                prodName={item.title}
                prodImage={item.images[0].url}
                prodPrice={item.price}
                prodOrgPrice={item.original_price}
              />
            })}

          </div>
        </div>
      </div>
    )
  }

}

export default Products
