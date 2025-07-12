import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/landing/header';
import Home from './components/landing/home';
import Dashboard from './pages/dashboard/dashboard';
import Challenges from './components/landing/challenges';
import Contest from './components/landing/contest';
import Team from './components/landing/team';
import CircularText from './components/animations/circularText';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={
            <div className="App max-w-screen mx-auto justify-center items-center flex flex-col">
              <Header onLoginSuccess={() => setIsLoggedIn(true)} />
              <div>
                <Home />
                <Challenges />
                <Contest />
                <Team />
              </div>
            </div>
          }
        />        
      </Routes>
    </Router>
  );
}

export default App;