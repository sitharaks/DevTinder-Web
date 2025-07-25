import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { BASE_URL } from '../utils/constants.js'
import { useDispatch , useSelector} from 'react-redux'
import { addUser } from '../utils/userSlice.js'
import axios from 'axios'

const Body = () => {
    const navigate = useNavigate()
    const userData = useSelector(store => store.user)
    console.log(userData)
    const dispatch = useDispatch()
     const fetchUser = async () => {
        console.log(Object.keys(userData).length)
        if(Object.keys(userData).length > 0) return;
            try {
                const res = await axios.get(`${BASE_URL}profile/view`, {
                    withCredentials: true
                })
                dispatch(addUser(res.data))
            } catch (err) {
                if(err.status === 401){
                    navigate("/login")  
                }
                
                // handle error if needed
            }
        }

    useEffect(() => {
       
        fetchUser()

        
    }, [])

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body
