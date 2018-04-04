// Code YouTubeDebugger Component Here
import React from 'react';


class YouTubeDebugger extends React.Component{
  constructor(){
    super();

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
    //set initial state


  }

  handleClick = (event) => {
    // conditional on the button clicked using class name
    console.log(event.target.className)
    if(event.target.className === 'bitrate'){
      this.setState({
        settings: {bitrate: 12, video: {resolution: this.state.settings.video.resolution}}
      })
    }else if(event.target.className === 'resolution'){
      this.setState({
        settings: {bitrate: this.state.settings.bitrate, video:{resolution: '720p'}}
      })
    }

  }

  render(){
    return (
      <div>
      <button className='bitrate' onClick={this.handleClick}>Bitrate: {this.state.settings.bitrate}</button>
      <button className='resolution' onClick={this.handleClick}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }

}



export default YouTubeDebugger;
