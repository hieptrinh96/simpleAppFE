// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Goals from './pages/Goals/Goals'
import AddGoal from './pages/AddGoal/AddGoal'
import GoalDetail from './pages/GoalDetail/GoalDetail'
import EditGoal from './pages/EditGoal/EditGoal'
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

  const handleUpdateGoal = async (goalData) => {
    const updateGoal = await goalService.update(goalData)
    setGoals(
      goals.map((goal) =>
        goalData._id === goal._id ? updateGoal : goal
      )
    )
    navigate('/goals')
  }

  const handleDeleteGoal = async (id) => {
    const deletedGoal = await goalService.deleteGoal(id)
    setGoals(
      goals.filter((goal) => goal._id !== deletedGoal._id)
    )
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
        path='/add-goal'
        element={
          <ProtectedRoute user={user}>
            <AddGoal handleAddGoal={handleAddGoal}/>
          </ProtectedRoute>
        }
        />
        <Route 
        path='/goals/:goalId'
        element={
          <ProtectedRoute user={user}>
            <GoalDetail />
          </ProtectedRoute>
        }
        />
        <Route 
        path='/goals/:goalId/edit'
        element={
          <ProtectedRoute user={user}>
            <EditGoal 
              handleUpdateGoal={handleUpdateGoal}
              handleDeleteGoal={handleDeleteGoal}
              />
          </ProtectedRoute>
        }
        />
      </Routes>
    </>
  )
}

export default App
