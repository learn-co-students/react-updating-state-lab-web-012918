// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
         }
       }
    }
  }

  handleClick = (event) => {
    this.setState({
     settings: Object.assign({}, this.state.settings, {
       bitrate: 12
     }),
   });
  }

  handleClick2 = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        },
      });
  }

  render() {
    return (
      <div>
        <button className="bitrate"onClick={this.handleClick}>{this.state.settings.bitrate}</button> <br/>
        <button className="resolution"onClick={this.handleClick2}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
