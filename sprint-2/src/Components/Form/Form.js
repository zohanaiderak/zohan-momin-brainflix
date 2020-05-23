import React from 'react'


class Form extends React.Component{
    state = {
        title : "",
        description : ""
    }

    updateTitle = event =>{
        this.setState({
            title : event.target.value,
        })
    }
    
    updateDescription = event =>{
        this.setState({
            description : event.target.value,
        })
    }

    handleClick = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    render() {
    return(
        <form>
            <p className ="uploadInput">TITLE YOUR VIDEO:{" "}
            <input className="uploadTitle"
                type="text"
                name="title"
                onChange={this.updateTitle}
                value = {this.state.title}
                placeholder="Add a title to your video"
                /></p>
            <p className="uploadInput des">ADD A VIDEO DESCRIPTION
            <textarea className="uploadDescription"
                type="text"
                name="description"
                onChange={this.updateDescription}
                value={this.state.description}
                placeholder="Add a description of your video"></textarea></p>
            <button className="publishButton" type="button" onClick={this.handleClick}>PUBLISH</button>
            <button className="publishButton cancel"type="button">CANCEL</button>
        </form>
        )
    }
}

export default Form;