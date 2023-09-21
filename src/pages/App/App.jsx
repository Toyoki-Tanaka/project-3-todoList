import { useState } from 'react'
import './App.css'
import NewOrderPage from "../NewOrderPage/NewOrderPage.jsx"
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage.jsx"
import AuthPage from "../AuthPage/AuthPage.jsx"
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service'
function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className='App'>
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/orders/new" element={<NewOrderPage />} />

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
