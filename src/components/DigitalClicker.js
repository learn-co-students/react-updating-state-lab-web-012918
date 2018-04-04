// Code DigitalClicker Component Here

import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }


  clickster = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    }, () => {
      console.log(this.state.timesClicked)
    })
  }


  render() {
    return (
      <div>
        <button onClick={this.clickster}>{this.state.timesClicked}</button>
      </div>
    )
  }

}


export default DigitalClicker;
