/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faArrowLeft ,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {deleteWatchHistoryapi,getALLVideoHistory} from '../services/allAPI'
function WatchHistory() {

  const[historyVideo, setHistoryVideos]=useState([])
  const[deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const getHistory=async()=>{
    const response=await getALLVideoHistory()
    /* console.log(response); */
    setHistoryVideos(response.data)
  }
 /*  console.log(historyVideo); */

  //fun to dlt video frm history
  const handleDelete=async(id)=>{
    const response = await deleteWatchHistoryapi(id);
    console.log(response);
  if(response.status>=200 && response.status<300){
    setDeleteVideoStatus(true)
  }
  else{
    alert('something went wrong')
  }
  }

  useEffect(()=>{
    getHistory()
    setDeleteVideoStatus(false)
  },[deleteVideoStatus])
  return (
    <>
    <div className='mt-5 d-flex justify-content-between align-items-center p-5'>
      <h3>Watch History</h3>
      <h5><Link style={{textDecoration:'none',color:'white'}} to={'/home'}><FontAwesomeIcon className='me-3' icon={faArrowLeft} beat/>Back to Home</Link></h5>
    </div>

    <div className='d-flex justify-content-between align-items-center mx-5 p-4'>
    {historyVideo?.length>0?
      <table className='table m-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {historyVideo.map((item,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.url} target="_blank">{item.url}</a></td>
          <td>1{item.timestamp}</td>
          <td>
            <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </td>
        </tr>
        ))}
      </tbody>
    </table>:
    <p className='text-danger fs-4'>No Watch History</p>
    }
    </div>
    </>
  )
}

export default WatchHistory