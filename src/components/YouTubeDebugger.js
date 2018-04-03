import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
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

  render() {
    return (
      <div>
      <button type="submit" className="bitrate" onClick={this.updateBit}>{this.state.settings.bitrate}</button>
      <button type="submit" className="resolution" onClick={this.updateRes}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }

  updateBit = () => {
    this.setState({
      settings: {...this.state.settings,
                bitrate: 12
              }
    })
  }

  updateRes = () => {
    this.setState({
      settings: {...this.state.settings,
                video: {
                  resolution: '720p'
                }
              }
    })
  }

}

export default YouTubeDebugger
