import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { removeFeedUser } from '../utils/feedSlice'

const UserCard = ({user}) => {
  const dispatch = useDispatch()
   const handleSendReq = async(status, id) => {
    debugger
      try {
        const req = await axios.post(BASE_URL+"request/send/"+status+"/"+id, {}, {withCredentials: true})
        dispatch(removeFeedUser(id))
      }catch(err){
        console.log(err)
      }
  }
  return (
    <div>
      <div className="card flex my-40 mx-auto  bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={user.photoUrl}
      alt="pic" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName}</h2>
    <h2 className="card-title">{user.lastName}</h2>
    <p>{user.bio}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={() => handleSendReq("interested", user._id)}>Accept</button>
      <button className="btn btn-primary" onClick={() => handleSendReq("ignore", user._id)}>Ignore</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
