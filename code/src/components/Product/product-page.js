import React from "react"
import "./products.js"
import "./product.css"

export default class ProductPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      oneProduct: {}
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

  render() {
    return (
      <div className="product-info">
        Hello
        {this.state.oneProduct.title}

      </div>
    )
  }

}

// constructor(props) {
//   super(props)
//   this.state = {
//     products: {}
//   }
// }
//
// componentDidMount() {
//     fetch("https://api.tictail.com/v1.26/stores/5znv/products/KETj").then((response) => {
//     return response.json()
//   this.setProduct(product)
// }).then((json) => {
//   console.log(json)
//   console.log(`KOLLAR URL:EN ${this.props.match.params.productPage}`)
//     this.setState({
//       oneProduct
//       products: this.state.products.find(p => (p.title === this.props.match.params.productPage))
//     })
//     console.log(`KOLLAR PRODUKTEN ${this.state.products}`)
//   })
// }
//
// oneProduct = (product) => {
//   this.setState({
//     products = this.state.products.find(p => (p.title === this.props.match.params.productPage))
//   })
// }
//
// render() {
//   console.log(`HEJHEJHEJ ${this.state.products}`)
//   return (
//     <div className="ProductPage">
//       <p>Breadcrumb path placeholder</p>
//       {<div className="imageHolder" style={{backgroundImage:`url(${this.state.product.images[0].url})` }}>
//       </div>}
//
//       <div className="product-info">
//         <h1>{this.state.products.title}
//         </h1>
//         <h2>Product details</h2>
//         <p>{this.state.products.description}</p>
//       </div>
//     </div>
//   )
// }
