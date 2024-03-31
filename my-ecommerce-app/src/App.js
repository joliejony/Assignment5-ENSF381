import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        {/* Remove the route for '/login' as LoginPage will be integrated within Productpage */}
        <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;

