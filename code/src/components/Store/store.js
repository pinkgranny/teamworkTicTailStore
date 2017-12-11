import React from "react"
import "./store.css"

class Store extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: null,
      // description: null,
    }
  }

  render() {
    return (
      <div className="store">
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Store
