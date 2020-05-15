import React from 'react';
import Video from './Video/Video'
import videoData from './Video/VideoData'

class Main extends React.Component{
    state =({
        video : videoData,
        comments : videoData.mainVideo.comments
      })
    
    render(){
    return(
        <main>
        <Video 
         video={this.state.video}
         comments = {this.state.comments}
        />
        <section id="section"></section>
        </main>
    )
      }
}

export default Main;