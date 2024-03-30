import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={loggedIn ? <Productpage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
