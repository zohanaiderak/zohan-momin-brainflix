import React from 'react';
import './SideVid.scss';
import axios from 'axios';
import {BrowserRouter ,Route ,Switch, Link} from 'react-router-dom'

class SideVideo extends React.Component{
    render(){
        return(
            <div className="sideVideo">
                <p className="sideVideo__title">NEXT VIDEO</p>
                    {this.props.sdvideo.map(sidevid =>{
                        if(this.props.title !== sidevid.title)
                            return(
                                <Link to={`/${sidevid.id}`}><Sidevid 
                                    key ={sidevid.id}
                                    image ={sidevid.image}
                                    title = {sidevid.title}
                                    channel = {sidevid.channel}
                                /></Link>
                            )
                        return true;
                    })}
                
                {/* <BrowserRouter>
                    <Route path="/" component={SideVideo} />
                        <Switch>
                            <Route path={`${this.props.match.path}/:id`} component={Video} />
                        </Switch>
                </BrowserRouter>  */}
            </div>
        )
    }
}

const Sidevid = (props) =>{
    return(
        <div className="sideVideo__item">
            <img className="sideVideo__item--poster" src={props.image} alt ="Side Video Pic"></img>
            <ul className="sideVideo__item--data">
                <li className="title">{props.title}</li>
                <li className="channel">{props.channel}</li>
            </ul>
        </div>
    )
}

export default SideVideo ;