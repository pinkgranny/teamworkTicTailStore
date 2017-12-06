import React from "react"

class Hero extends React.Component {

  render() {
    const style = {
      backgroundImage: `url(${this.props.hero})`
    }
    // console.log(this.props.wallpapers.iphone.url)
    return (
      <div className="hero" style={style}>
        {/* <img src={this.props.hero} alt="" /> */}
      </div>
    )
  }
}
export default Hero
