import Body from './components/Body.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter , Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={ <Body /> } >
          <Route path="/login"  element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to DevTinder</h1>
      </div>
    </>
  )
}

export default App
