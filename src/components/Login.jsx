import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';



const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [ errorMessage, setErrMessage ] = useState('')
    const [ emailId, setEmailId ] = useState('sithara@gmail.com');
    const [ password, setPassword ] = useState('@Mickey12');

    const handleLogin = async () => {
        try{
            const res = await axios.post(`${BASE_URL}login`,{
                email: emailId,
                password: password
            },{withCredentials: true});

            dispatch(addUser(res.data))
            return  navigate("/")
        }catch(err){
            setErrMessage(err?.response?.data?.message || 'Something went wrong')
            console.error("Login failed:", err);
        }

    }
  return (
    <div className='flex justify-center my-30'>
        <div className="card card-border bg-base-300 w-96 ">
            <div className="card-body">
                <h2 className="card-title">Login</h2>
                <div className=''>
                    <input 
                        type="text"
                        placeholder="EmailId" 
                        className="input input-bordered w-full max-w-xs mb-4"
                        value={emailId}
                        onChange={(e)=>{
                            setEmailId(e.target.value)
                        }} />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full max-w-xs mb-4" />
                </div>
                <p className='text-red-500'>{errorMessage}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick ={handleLogin}>Login</button>
                </div>
            </div>
    </div>
</div>
  )
}

export default Login
