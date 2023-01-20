import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul className={styles['link-container']}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to='/goals'>My Goals</Link></li>
          <li><Link to="/changePassword">Change Password</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
        </ul>
      :
        <ul className={styles['login-container']}>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
