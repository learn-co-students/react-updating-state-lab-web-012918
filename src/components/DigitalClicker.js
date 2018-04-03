
import React from 'react';


export default class DigitalClicker extends React.Component {

  constructor(){
    super()

    this.state = {
      timesClicked: 0
    }
  }

  render(){
    return(
      <button onClick={this.updateClickCount} >{this.state.timesClicked}</button>
    )
  }

  updateClickCount = (e) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

}
