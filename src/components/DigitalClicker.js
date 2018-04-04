// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
  constructor(){
    super();

    this.state = {
      timesClicked: 0
    }
    //{set initial state}
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
    // {changes clicked to next iteration on click}
  }

  render(){
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
    // {onClick goes to the handleclick function}
    // {this.state.clicked  takes the current state its in}
  }
}

export default DigitalClicker;
