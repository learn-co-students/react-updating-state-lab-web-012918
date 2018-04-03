// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super()

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState({
      timesClicked: (Number(`${this.state.timesClicked}`) + 1)
    })
  }

  render(){
    return(
      <div>
        <h1>Times clicked: {this.state.timesClicked}</h1>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
