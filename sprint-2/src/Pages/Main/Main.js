import React from 'react';
import Video from '../../Components/Main-video/Video'
import videoData from '../../Components/Main/VideoData'
import axios from 'axios'

class Main extends React.Component{
  state = {
    video: videoData
  }

    
    render(){
    return(
        <main>
        <Video 
         video={this.state.video}
        />
        <section id="section"></section>
        </main>
    )
      }
}

export default Main;