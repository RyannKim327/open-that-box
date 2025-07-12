import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/landing/header';
import Home from './components/landing/home';
import LeaderboardPage from './components/landing/leaderboard';
import Dashboard from './pages/dashboard/dashboard';

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
            <div className="App max-w-screen mx-auto justify-center items-center w-screen overflow-x-hidden">
              <Header onLoginSuccess={() => setIsLoggedIn(true)} />
              <div className="pt-16">
                <Home />
                <LeaderboardPage />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;