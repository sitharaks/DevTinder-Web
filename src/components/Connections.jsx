import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import { useEffect } from 'react'
import { addConnections } from '../utils/connectionSlice'

const Connections = () => {
    const connectionRequest = useSelector(state => state.connections)
    const dispatch = useDispatch()
    const getConnections = async() => {
        try{
                const res = await axios.get(BASE_URL+'user/connections',{withCredentials: true})
                console.log(res?.data?.data)
                dispatch(addConnections(res?.data?.data))
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=> {
        getConnections()
    },[])
    if(!connectionRequest) return;
    if(connectionRequest.length === 0) return <h1 className='p-auto font-bold'>No connections Found</h1>
  return (
    
    <div className='text-center'>
      <h1>Connections</h1>
      {connectionRequest.map((connection)=> {
        const { _id,firstName, lastName, photoUrl, bio } = connection
        return(
            <div key={_id}className='m-4 p-4 flex rounded-lg bg-base-300 w-1/2 mx-auto'>
                <div>
                    <img alt="dp" src={photoUrl} className='rounded-full w-30 h-30'></img>
                </div>
                <div className='text-left mx-4'>
                    <h2 className='font-bold text-xl'>{firstName+ " " + lastName}</h2>
                    <h1>{bio}</h1>
                </div>
            </div>
        )
      
      })}
    </div>
  )
}

export default Connections
