import React from "react"

class Store extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      description: null,
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5znv").then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json)
      this.setState({json})
    })
  }

  render() {
    return (
      <div className="store">
        <h1>store</h1>
      </div>
    )
  }
}

export default Store
