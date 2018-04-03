import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
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
  }
  mouseClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    })
  }
  mouseClick2 = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }

    })
  }

  render() {
    return (
      <div>
      <button className='bitrate' onClick={this.mouseClick}>12 bitrate</button>
      <button className='resolution' onClick={this.mouseClick2}>720 p</button>
      </div>
    );
  }
}
