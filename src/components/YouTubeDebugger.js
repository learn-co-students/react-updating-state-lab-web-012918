// Code YouTubeDebugger Component Here


import React from 'react';

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

 changeBit = (e) => {
   this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
   }, console.log(this.state.settings.video))
 }

 changeReso = () => {
   this.setState({
     settings: {
       ...this.state.settings,
       video: {
         ...this.state.settings.video,
         resolution: '720p'
       }
     }
    }, console.log(this.state.settings.video))
  }




  render() {
    return (
    <div>
      <button onClick={ this.changeBit }className='bitrate'>Bitrate</button>
      <button onClick={ this.changeReso }className='resolution'>Resolution</button>
    </div>
    )
  }

}




export default YouTubeDebugger;
