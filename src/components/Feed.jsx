import React, { useEffect } from 'react'
import axios from "axios"
import { BASE_URL } from '../utils/constants'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { addFeedUser } from '../utils/feedSlice'

const Feed = () => {
  const dispatch = useDispatch()
  const feedUser = useSelector(store=> store.feed)
  useEffect(()=> {
    getFeedUsers()
  },[])
  const getFeedUsers = async() => {
        try{
              const res = await axios.get(BASE_URL+"user/feed", {withCredentials: true})
              dispatch(addFeedUser(res.data))
              console.log(res.data)
        }catch(err){
          console.log(err)
        }
    }


  return (
    <div>
        {feedUser && <UserCard user={feedUser[0]} />}
    </div>
  )
}

export default Feed
