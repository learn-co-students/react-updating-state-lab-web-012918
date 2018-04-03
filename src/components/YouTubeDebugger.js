// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{

  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {resolution: '1080p'}
      }
    }
  }//endofconstructor

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => {
      console.log(this.state)
    })
  }


  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    }, () => {
      console.log(this.state)
    })
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
      </div>
    )
  }//endofrender
}//endofclass
