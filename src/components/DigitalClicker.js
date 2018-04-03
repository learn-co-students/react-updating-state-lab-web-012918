// The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {timesClicked: 0}
  }

  render() {
    return (
      <div>
      <button type="submit" id="submit" onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }
}

export default DigitalClicker
