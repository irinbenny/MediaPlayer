/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    //hook-useDispatch(action file ilaa fun call cheyan)
    const dispatch= useDispatch()
    const count=useSelector((state)=>state.counter.value)
  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
        <div className='shadow border rounded border-primary p-5'>
            <h3 className='text-center text-primary mt-4'>Counter Application</h3>

            <h1 className='text-center mt-4' style={{fontSize:'100px'}}>{count}</h1>

            <div className='d-flex mt-5'>
                <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
                <button className='btn btn-danger ms-3' onClick={()=>dispatch(reset())}>Reset</button>
                <button className='btn btn-warning ms-3' onClick={()=>dispatch(decrement())} >Decrement</button>
            </div>
        </div>
    </div>
  )
}

export default Counter