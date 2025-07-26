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
     const [ firstName, setFirstName] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ isLoginForm, setIsLoginForm ] = useState(true)
    const [ emailId, setEmailId ] = useState('sithara@gmail.com');
    const [ password, setPassword ] = useState('@Mickey12');
    const handleLoginForm = () => {
        setIsLoginForm((value) => !value)
    }
    const handleSignup = async() => {
        try{    
            const res = await axios.post(BASE_URL+"signup",{firstName,lastName,email: emailId,password},{withCredentials: true})
            console.log(res?.data?.data)
             dispatch(addUser(res?.data?.data))
              return  navigate("/profile")
        }catch(err){
            setErrMessage(err?.response?.data?.message || 'Something went wrong')
            console.log(err)
        }
    }
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
                <h2 className="card-title">{isLoginForm ? "Login" : "Signup"}</h2>
                <div className=''>
                    {!isLoginForm && 
                    <>
                    <input 
                        type="text"
                        placeholder="FirstName" 
                        className="input input-bordered w-full max-w-xs mb-4"
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} />
                    <input 
                        type="text"
                        placeholder="LastName" 
                        className="input input-bordered w-full max-w-xs mb-4"
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }} />
                    </>}
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
                <div className="card-actions flex flex-col justify-center">
                <button className="btn m-auto btn-primary" onClick ={isLoginForm? handleLogin : handleSignup}>{isLoginForm?"Login":"Signup"}</button>
                <p className="m-auto cursor-pointer"onClick={handleLoginForm}>{isLoginForm ? "New User? Signup here" : "Existing user? Login here "}</p>
                </div>
            </div>
    </div>
</div>
  )
}

export default Login
