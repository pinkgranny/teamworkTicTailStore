import React from "react"
import { Link } from "react-router-dom"
import "./store.css"

class Store extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="store">
        <Link className="link" to="/">
          <div className="image-logo" style={{ backgroundImage: `url(${this.props.logo})` }} />
        </Link>
      </div>
    )
  }
}

export default Store
