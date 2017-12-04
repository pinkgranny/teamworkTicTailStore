import React from "react"
import Page from "./page"
import "./../index.css"

const productsJson = require("./../products.json")

class App extends React.Component {

  render() {
    return (

      <div className="App">
        <div className="header">
          <div className="hamburger">
            Hamburger
          </div>
          <div className="logo">
            Logo
          </div>
          <button id="headerButton">
            <i className="fa fa-shopping-cart" />
          </button>
        </div>

        <Page />

      </div>
    )
  }

}

export default App
