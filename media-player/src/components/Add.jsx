/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { uploadVideoApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);
  const [video,setVideo]=useState({
    id:"",
    caption:"",
    imageUrl:"",
    embedLink:""

  })
console.log(video);

const getEmbedLink=(e)=>{
  /* console.log(e.target.value); */
  const text=e.target.value;
  if(text.endsWith('?feature=shared')){
    console.log(text.slice(-26,-15));
    const link=`https://www.youtube.com/embed/${text.slice(-26,-15)}`
    setVideo({...video,embedLink:link})
  }
  else if(text.startsWith('http://youtu.be/')){
    console.log(text.slice(17,28));
    const link=`https://www.youtube.com/embed/${text.slice(17,28)}`
    setVideo({...video,embedLink:link})
  }
  else{
    console.log(text.slice(-11));
    const link=`https://www.youtube.com/embed/${text.slice(-11)}`
    setVideo({...video,embedLink:link})
  }
}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpload = async() => {
    const {id, caption, imageUrl, embedLink} = video
    console.log(id, caption, imageUrl, embedLink);
    if(!id || !caption || !imageUrl || !embedLink){
      toast.info('please fill the form compeletely')
    }
    else{
      const response = await uploadVideoApi(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('video uploaded successfully')
        setUploadVideoStatus(response.data)
           setVideo({
            id:'',
            caption:'',
            imageUrl:'',
            embedLink:''
           })
           handleClose()
      }else{
        console.log(response);
        toast.error("something went wrong")
    }
  }
  }
  return (
<>
      <div className=' d-flex'>
        <h5 className='me-2 mt-2'>Upload New Video</h5>
        <button className='btn ' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl'/></button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border rounded p-3 border-secondary'>
          <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter the Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
          </Form.Group>
          

          <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter the Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter the Video Image Url" onChange={(e)=>setVideo({...video,imageUrl:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter the Youtube Video Link" onChange={(e)=>getEmbedLink(e)}/>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-dark' onClick={handleClose}>
            Cancel
          </button>
          <button className='btn btn-warning' onClick={handleUpload}>
            Upload
          </button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add