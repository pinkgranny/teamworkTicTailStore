import React from "react"
import Product from "./product"
import Products from "./products"
import Categories from "./categories"


class Filter extends React.Component {

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

  formatPrice(price) {
    return (price / 100).toFixed(2)
  }

  render() {
    console.log(this)
    return (
      <div className="productWrap">
        <div className="productHeader">
          Visar {this.props.categories.count} produkter
        </div>

        <div className="productList">
          {this.props.products.filter(item => item.category).map((item) =>
            <Product
              updateProducts={this.props.updateProducts}
              prodName={item.title}
              prodImage={item.images[0].url}
              prodDescription={item.description}
              prodPrice={this.formatPrice(item.price)}
              prodOrgPrice={this.formatPrice(item.original_price)}
              prodId={item.id}
              category={item.categories[0].title} />)}
        </div>
      </div>
    )
  }

}

export default Filter
