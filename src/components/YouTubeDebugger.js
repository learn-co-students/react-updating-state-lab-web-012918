// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component {
  constructor(){
    super()
    this.state = {
      errors: [],
       settings: {
         bitrate: 8,
         video: {
           resolution: "1080p"
         },
       },
       user: null
    }
  }

  simulateButton = () => {

    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
        resolution: '720p'
      }
      },
    })
  }

  bitrateButton = () => {

    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      },
    })
  }
  render(){
    return (
      <div>
        <button className='bitrate' onClick={this.bitrateButton}>Bitrate</button>

        <button className='resolution' onClick={this.simulateButton}>Simulate</button>

      </div>
    )
  }
}

export default YouTubeDebugger
