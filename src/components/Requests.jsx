import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addRequests, removeRequests } from '../utils/requestsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Requests = () => {
  const requestsReceived = useSelector(store => store.requests)
  const dispatch = useDispatch()
  const handleStatus = async(status, _id) => {
    const res = await axios.post(BASE_URL+"request/review/"+status+"/"+_id, {}, {
      withCredentials:true
    })
    dispatch(removeRequests(_id))
  }
  const fetchRequests = async() => {
    try{
      const res = await axios.get(BASE_URL+"user/requests/received", {withCredentials: true})
      console.log(res?.data?.data)
      dispatch(addRequests(res?.data?.data))
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=> {
    fetchRequests()
  },[])
  if(!requestsReceived) return;
    if(requestsReceived.length === 0) return <h1>No Requests Found</h1>
  return (
    
    <div className='text-center'>
      <h1>Connection Requests</h1>
      {requestsReceived.map((connection)=> {
        const { _id, firstName, lastName, photoUrl, bio } = connection.fromUserId
        return(
            <div key ={_id}className='m-4 p-4 flex justify-between items-center rounded-lg bg-base-300 w-1/2 mx-auto'>
                <div>
                    <img alt="dp" src={photoUrl} className='rounded-full w-30 h-30'></img>
                </div>
                <div className='text-left mx-4'>
                    <h2 className='font-bold text-xl'>{firstName+ " " + lastName}</h2>
                    <h1>{bio}</h1>
                </div>
                <button className="btn btn-accent mx-2" onClick={()=>handleStatus("accepted", connection._id)}>Accept</button>
                <button className="btn btn-error mx-2" onClick={()=>handleStatus("rejected", connection._id)}>Reject</button>
            </div>
        )
      
      })}
    </div>
  )
}

export default Requests
