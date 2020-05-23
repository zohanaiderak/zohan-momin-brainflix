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
            <p className ="input">TITLE YOUR VIDEO:{" "}
            <input className="title"
                type="text"
                name="title"
                onChange={this.updateTitle}
                value = {this.state.title}
                placeholder="Add a title to your video"
                /></p>
            <p className="input des">ADD A VIDEO DESCRIPTION
            <textarea className="description"
                type="text"
                name="description"
                onChange={this.updateDescription}
                value={this.state.description}
                placeholder="Add a description of your video"></textarea></p>
            <button className="button" type="button" onClick={this.handleClick}>PUBLISH</button>
            <button className="button cancel"type="button">CANCEL</button>
        </form>
        )
    }
}

export default Form;