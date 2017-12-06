import React from "react"
import Product from "./product"

const productsJson = require("./../products.json")

class Products extends React.Component {

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
            Visar {productsJson.products.length} produkter
          </div>

          <div className="productList">

            {productsJson.products.map((item) => {
              return <Product
                prodName={item.name}
                prodPrice={item.price}
                prodType={item.type}
                prodSize={item.size}
                prodNumberInPack={item.numberInPack}
                prodDeliveryTime={item.deliveryTime}
                prodImage={item.image}
                prodSubstance={item.substance}
                prodDescription={item.description}
              />
            })}

          </div>
        </div>
      </div>
    )
  }

}

export default Products
