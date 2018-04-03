// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

  constructor() {
    super();
    this.state = {
      "errors": [],
      "settings": {
        "bitrate": 8,
        "video": {
          "resolution": "1080p"
        }
      },
      "user": null
    }
  }

  setBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => console.log(this.state))
  }

  setResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    }, () => console.log(this.state))
  }

  // this.setState({
  //   addressInfo: {
  //     ...this.state.addressInfo,
  //     city: 'New York City',
  //   },
  // });
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.setBitrate}>Set Bitrate</button>
        <button className="resolution" onClick={this.setResolution}>Set Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
