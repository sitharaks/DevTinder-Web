import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = async() =>{
    try {
      const res = await axios.post(BASE_URL + "logout", {}, { withCredentials: true });
      console.log(res.data);
      dispatch(removeUser());
      return navigate("/login");
    }catch(err){
      console.log(err)
    }
  }
  const user = useSelector(store => store.user)
  return (
    <div>
       <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl"> 👩‍💻Dev Tinder</Link>
  </div>
{user && Object.keys(user).length !== 0 && (
  <div className="flex gap-2">
    <div className='form-control'>Welcome, {user.firstName }</div>
    <div className="dropdown dropdown-end mr-10 flex">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/connections">Connections</Link></li>
        <li><Link to="/requests">Requests</Link></li>
        <li>  <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div> 
  </div> )}
</div>
    </div>
  )
}

export default Navbar
