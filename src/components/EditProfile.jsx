import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../utils/constants';
import UserCard from './UserCard';
import { addFeedUser } from '../utils/feedSlice';

const EditProfile = ({user}) => {
        const dispatch = useDispatch()
        const [ errorMessage, setErrMessage ] = useState('')
        const [ firstName, setFirstName ] = useState(user?.firstName);
        const [ lastName, setLastName ] = useState(user?.lastName);
        const [ photoUrl, setPhotoUrl ] = useState(user?.photoUrl);
        const [ bio, setBio ] = useState(user?.bio);
        const [ toast, showToast] = useState(false)

     const handleSave = async () => {
      try{
         const res = await axios.patch(BASE_URL+'profile/edit',{
        firstName,lastName,photoUrl,bio
      },{withCredentials: true})

      dispatch(addUser(res?.data?.data))
      showToast(true)
      setTimeout(()=>{
        showToast(false)
      },3000)
      }catch(err){
        console.log(err)
      }
     

    }
  return (
    <>
       
     <div className='flex justify-center'>
         {toast && <div className="toast toast-top toast-center py-30">
            <div className="alert alert-success">
                <span>Profile updated successfully!!</span>
            </div>
        </div>}
      <div className='flex  mr-20 my-40'>
        <div className="card card-border bg-base-300 w-96 ">
            <div className="card-body">
                <h2 className="card-title">Edit Profile</h2>
                <div className=''>
                  <label> FirstName:
                     <input 
                        type="text"
                        placeholder="firstname" 
                        className="input input-bordered w-full max-w-xs mb-4"
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} />
                  </label>
                  <label> LastName
                     <input 
                        type="text"
                        placeholder="lastname" 
                        className="input input-bordered w-full max-w-xs mb-4"
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }} />
                  </label>
                  <label> PhotoUrl
                     <input 
                        type="text"
                        placeholder="photoUrl" 
                        className="input input-bordered w-full max-w-xs mb-4"
                        value={photoUrl}
                        onChange={(e)=>{
                            setPhotoUrl(e.target.value)
                        }} />
                  </label>
                   <label>Bio
                        <input 
                        type="text" 
                        placeholder="Bio" 
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="input input-bordered w-full  items-start max-w-xs mb-4" />
                   </label>

                  
                    
                </div>
                <p className='text-red-500'>{errorMessage}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={handleSave}>Save Profile</button>
                </div>
            </div>
    </div>

    </div>
    <UserCard user={{firstName, lastName, photoUrl, bio}} />
    </div>
    </>
   
  )
}

export default EditProfile
