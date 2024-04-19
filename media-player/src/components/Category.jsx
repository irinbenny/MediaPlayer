/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import VideoCard from '../components/VideoCard'
import { Col, Row } from 'react-bootstrap';
import { addCategoryApi, deleteCategory, getCategory, getVideoApi ,updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Category({videoDragAndRemoveStatus,setVideoDragAndRemoveStatus}) {


  //state to store category name
  const [categoryName,setCategoryName]=useState("")
  const [allCategory,setAllCategory]=useState([])
  const [addCategoryStatus,setAddCategoryStatus]=useState(false)
  const [deleteCategoryStatus,setDeleteCategoryStatus]=useState(false)

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(categoryName);


    //function to add category
    const handleCategoryAdd=async()=>{

      if(categoryName){
        let reqBody={
          category:categoryName,
          allVideos:[]
        }
        
        const response=await addCategoryApi(reqBody)
        console.log(response);

        if(response.status>=200 && response.status<300){
          toast.success('category added')
          setAddCategoryStatus(true)
          handleClose()
        }else{
          toast.error('something went wrong')
        }
      }
      else{
        toast.info('please enter the Category Name')
      }
    }

    //function to get category
    const getAllCategory=async()=>{
      const response=await getCategory()
      setAllCategory(response.data)
    }

    console.log(allCategory);

    //function to delete category
    const handleDeleteCategory=async(id)=>{
      await deleteCategory(id)
      setDeleteCategoryStatus(true)
    }

    //function to prevent the data loss on drag
    const dragOver=(e)=>{
      e.preventDefault()
    }

    //function for drop
    const videoDrop=async (e,categoryId)=>{
    console.log(`category Id is${categoryId}`);

      //get the videoid send from the videocard component
     const videoid=  e.dataTransfer.getData("videoId")
     console.log(`video Id is ${videoid}`);
    

    //api call to get a details of a particular video that is dragged
    const {data} =await getVideoApi(videoid)
    console.log(data);

    //selected category
    const selectedCategory=allCategory.find((item)=>item.id==categoryId)
    console.log(selectedCategory);

    if(selectedCategory.allVideos.find(item=>item.id==videoid)){
      toast.error("video already exist in the same category")
    }else{
      selectedCategory.allVideos.push(data)
    }

    

    //function to update category
    await updateCategory(categoryId,selectedCategory)
    getAllCategory()

    }

    //function to remove cards from category
    const dragStart=(e,categoryId,videoId)=>{
      console.log(`categoryid is ${categoryId}`);
      console.log(`videoid is ${videoId}`);

      let dataShared={
        categoryId,videoId
      }
      e.dataTransfer.setData("dataShared",JSON.stringify(dataShared))
    }


    useEffect(()=>{
      getAllCategory()
      setAddCategoryStatus(false)
      setDeleteCategoryStatus(false)
      setVideoDragAndRemoveStatus(false)
    },[addCategoryStatus,deleteCategoryStatus,videoDragAndRemoveStatus])


     return (
    <>
    <div className='d-flex justify-content-center align-items-center mb-5'>
    <button className='btn btn-warning w-100' onClick={handleShow}>Add New Category</button>
    </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPencil} className='me-2 text-warning'/>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
          <Form className='border rounded p-3 border-secondary'>
          <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-dark' onClick={handleClose}>
            Cancel
          </button>
          <button className='btn btn-warning' onClick={handleCategoryAdd}>
            Add
          </button>
        </Modal.Footer>
      </Modal>

     { allCategory?.length>0?

     allCategory?.map((item)=>(
      <div className='border border-secondary w-100 p-3 rounded mt-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
          <div className='d-flex justify-content-center align-items-center'>
               <p>{item.category}</p>
               <button onClick={()=>handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan}/></button>
          </div>
          <Row>
            {item.allVideos.length>0?
            item.allVideos.map((card)=>(
              <Col sm={12} draggable onDragStart={(e)=>dragStart(e,item.id,card.id)}>
             <VideoCard displayVideo={card} isPresent={true}/> 
              </Col>)):null
            }
          </Row>
          
        </div>
     )): <p className='text-danger mt-5'>No category added</p>
        
      }
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

</>
  )
}

export default Category