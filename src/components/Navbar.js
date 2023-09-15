import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth'; // Import only necessary Firebase function
import { app } from '../firebase';
import '../styles/Navbar.css'; // Import the CSS file

function Navbar({ user }) {
  const auth = getAuth(app);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/tasklist">Task List</Link>
        </li>
        <li className='nav-item'>
            <Link to="/taskform">TaskForm</Link>
        </li>
        {user ? (
          <li className="nav-item">
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
        ) : (
          <>
            <li className="nav-item btn" >
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="nav-item btn">
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
