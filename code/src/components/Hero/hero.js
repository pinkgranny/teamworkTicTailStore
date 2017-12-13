import React from "react"
import "./hero.css"

class Hero extends React.Component {

  render() {
    const style = {
      backgroundImage: `url(${this.props.hero})`
    }

    return (
      <div className="hero" style={style} />
    )
  }
}
export default Hero
