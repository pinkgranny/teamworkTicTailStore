import React from "react"

class Hero extends React.Component {

  render() {
    // console.log(this.props.wallpapers.iphone.url)
    return (
      <div className="hero">
        <img src={this.props.hero} alt="" />
      </div>
    )
  }
}
export default Hero
