import React from 'react'
import Image from '../../assets/images/Upload-video-preview.jpg'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid';
const API_URL = process.env.REACT_APP_API_URL;

class Form extends React.Component{
    state = {
        id: uuidv4(),
        image: Image,
        title : "",
        description : ""
    }

    updateTitle = event =>{
        this.setState({
            title : event.target.value
        })
    }
    
    updateDescription = event =>{
        this.setState({
            description : event.target.value,
        })
    }

    handleClick = (e) =>{
        e.preventDefault();
        axios.post(`${API_URL}`, this.state)
            .then((res)=>{
                console.log(res)
            })
        axios.post(`${API_URL}/${this.state.id}`, this.state)
          .then(res=>{
              console.log(res)
          })
        this.setState({
            title: "",
            description: ""
        })
        alert("VIDEO UPLOADED, CHECK THE MAIN PAGE TO VIEW IT")
    }

    render() {
        return(
            <form>
                <div className="uploadForm">
                    <span>
                        <p className="thumbnail">VIDEO THUMBNAIL</p>
                        <img className="videoUpload" src={Image} alt="Upload Video"></img>
                    </span>
                    <span className="span2">
                        <p className ="uploadInput">TITLE YOUR VIDEO
                            <input className="uploadTitle"
                                type="text"
                                name="title"
                                onChange={this.updateTitle}
                                value = {this.state.title}
                                placeholder="Add a title to your video"
                            />
                        </p>
                        <p className="uploadInput des">ADD A VIDEO DESCRIPTION
                            <textarea className="uploadDescription"
                                type="text"
                                name="description"
                                onChange={this.updateDescription}
                                value={this.state.description}
                                placeholder="Add a description of your video">
                            </textarea>
                        </p>
                    </span>
                </div>
                <div className="button__container">
                    <button className="publishButton" type="button" onClick={this.handleClick}>PUBLISH</button>
                    <button className="publishButton cancel"type="button">CANCEL</button>
                </div>
            </form>
        )
    }
}

export default Form;