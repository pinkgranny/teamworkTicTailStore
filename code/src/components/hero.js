import React from "react"

class Hero extends React.Component {

 //  componentDidMount() {
 //    fetch("https://api.tictail.com/v1.26/stores/5znv").then((response) => {
 //      return response.json()
 //    }).then((json) => {
 //    console.log(json)
 //    this.setState({
 //      store: json
 //    })
 //  })
 // }


  render() {
    console.log(this.state.wallpapers.iphone[0])
    return (
      <div className="hero">
        <img src={this.state.wallpapers.iphone[0]} alt="" />
      </div>
    )
  }
}
export default Hero
