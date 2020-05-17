import React from 'react';
import Video from '../Main-video/Video'
import videoData from './VideoData'

class Main extends React.Component{
    state =({
        video : videoData,
      })
    
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