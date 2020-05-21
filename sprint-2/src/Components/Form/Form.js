import React from 'react'


class Form extends React.Component{
    state = {
        title :"",
        description :""
    }

    updateTitle = event =>{
        this.setState=({
            title : event.target.value
        })
    }
    
    updateDescription = event =>{
        this.setState=({
            description : event.target.value
        })
    }

    handleClick = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    render() {
    return(
        <form>
            <p className ="input">TITLE YOUR VIDEO
            <input 
                type="text"
                name="title"
                onChange={this.updateTitle}
                value={this.state.title}/></p>
            <p className="input">ADD A VIDEO DESCRIPTION
            <textarea
                type="text"
                name="description"
                onChange={this.updateDescription}
                value={this.state.description}></textarea></p>
            <button type="button" onClick={this.handleClick}>PUBLISH</button>
            <button type="button">CANCEL</button>
        </form>
        )
    }
}

export default Form;