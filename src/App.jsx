import Body from './components/Body.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Feed from './components/Feed.jsx'
import Connections from './components/Connections.jsx'
import Requests from './components/Requests.jsx'
import { Provider }  from 'react-redux'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import store from './utils/appStore.js'


function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={ <Body /> } >
          <Route path="/" element={<Feed />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<Requests />} />
        </Route>
      </Routes>
    </BrowserRouter>
</Provider>
    
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to DevTinder</h1>
      </div>
    </>
  )
}

export default App
