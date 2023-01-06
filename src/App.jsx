// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Goals from './pages/Goals/Goals'
import AddGoal from './pages/AddGoal/AddGoal'
// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as goalService from './services/goalService'
// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [goals, setGoals] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllGoals = async () => {
      const goalData = await profileService.showMyGoals(user.profile)
      setGoals(goalData)
    }
    fetchAllGoals()
  }, [user])

  const handleAddGoal = async (goalData) => {
    const newGoal = await goalService.create(goalData)
    setGoals([...goals, newGoal])
    navigate('/goals')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/goals'
          element={
            <ProtectedRoute user={user}>
              <Goals goals={goals}/>
            </ProtectedRoute>
          }
        />
        <Route 
        path='/addGoal'
        element={
          <ProtectedRoute>
            <AddGoal handleAddGoal={handleAddGoal}/>
          </ProtectedRoute>
        }
        />
      </Routes>
    </>
  )
}

export default App
