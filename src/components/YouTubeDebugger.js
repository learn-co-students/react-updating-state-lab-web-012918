import React from 'react'

export default class YouTubeDebugger extends React.Component {

  constructor(){
    super()

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

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    }, () => {
      console.log(this.state)
    })
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        },
      },
    }, () => {
      console.log(this.state)
    })
  }


  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>birate button</button>
        <button className="resolution" onClick={this.handleResolution}>resolution button</button>
      </div>
    )
  }
}
