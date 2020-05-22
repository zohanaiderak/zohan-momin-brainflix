import React from 'react'
import Image from '../../Assets/Images/Upload-video-preview.jpg'
import Form from '../../Components/Form/Form'

const Upload = () =>{
    return(
        <>
        <h1>Upload Video</h1>
        <p>VIDEO THUMBNAIL</p>
        <img src={Image} alt="Upload Video"></img>
        <Form />
        </>
    )
}

export default Upload;