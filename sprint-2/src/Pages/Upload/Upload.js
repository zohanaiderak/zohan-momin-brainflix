import React from 'react'
import Image from '../../assets/images/Upload-video-preview.jpg'
import Form from '../../Components/Form/Form'
import './Upload.scss'

const Upload = () =>{
    return(
        <div className="upload-page">
        <h1 className="uploadHeading">Upload Video</h1>
        <p className="thumbnail">VIDEO THUMBNAIL</p>
        <img className="videoUpload" src={Image} alt="Upload Video"></img>
        <Form />
        </div>
    )
}

export default Upload;