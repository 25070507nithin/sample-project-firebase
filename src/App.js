import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home';
import { auth } from './firebaseConfig';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);

    
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/home" /> : <SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
