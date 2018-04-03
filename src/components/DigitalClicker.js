import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  updateTimesClicked = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.updateTimesClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
