import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the use of "as Router"
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getAuth } from 'firebase/auth';
import { app } from './firebase';

function App() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  return (
    <Router> {/* Use "Router" instead of "BrowserRouter" */}
      <Navbar user={user} />

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {user ? (
          <>
            <Route path="/taskform" element={<TaskForm />} />
            <Route path="/tasklist" element={<TaskList />} />
          </>
        ) : (
          <Route path="/" element={<p style={{textAlign:"center",color:"blue"}}>Please sign in to access tasks.</p>} />
        )}
      </Routes>
    </Router> 
  );
}

export default App;
