// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  clickBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  clickResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: { resolution: '720p' }})
    })
  }

  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.clickBitrate}></button>
        <button className='resolution' onClick={this.clickResolution}></button>
      </div>
    )
  }
}

export default YouTubeDebugger

//
// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.
// This component has several state properties. The initial state shape looks like this:
// js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
