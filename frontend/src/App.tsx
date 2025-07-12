import Header from './components/landing/header'
import Home from './components/landing/home'
import './App.css'
import LeaderboardPage from './components/landing/leaderboard'

function App() {
  return (
    <div className="App max-w-screen mx-auto justify-center items-center h-screen w-screen p-8 overflow-x-hidden">
      <Header />
      <Home />
      <LeaderboardPage />
    </div>
  )
}

export default App
