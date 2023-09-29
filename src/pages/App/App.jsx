import { useState } from 'react'
import './App.css'
import NewToDoPage from '../NewToDoPage/NewToDoPage.jsx'
import ToDoList from '../ToDoList/ToDoList.jsx'
import AuthPage from "../LoginPage/AuthPage.jsx"
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
              <Route path="/todo/list" element={<ToDoList />} />
              <Route path="/todo/new" element={<NewToDoPage />} />
              {/* <Route path="/todo/:id" element={} */}

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
