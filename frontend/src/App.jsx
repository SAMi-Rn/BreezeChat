import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/Signup.jsx'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'


function App() {
  const location = useLocation()
  const { authUser } = useAuthContext()

  useEffect(() => {
    const changeBackground = () => {
      const root = document.documentElement

      let bgImage
      switch (location.pathname) {
        case '/':
          bgImage = "url('3.gif')"
          break
        case '/login':
          bgImage = "url('newlogin.gif')"
          break
        case '/signup':
          bgImage = "url('newlogin.gif')"
          break
        default:
          bgImage = "url('newlogin.gif')"
      }

      root.style.setProperty('--background-design', bgImage)
    }

    changeBackground()
  }, [location])

  return (
    <div className="bg-dynamic h-screen min-h-screen flex justify-center items-center">
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App