import Dashboard from './pages/Dashboard'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './features/authentication/Login'
import { useState } from 'react'

function App() { 
    const [name, setName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return isLoggedIn
        ? <Dashboard name={name} onLogout={() => setIsLoggedIn(false)} />

        : <Login onLogin={(enteredName) => { setName(enteredName); setIsLoggedIn(true); }} />;
}

const root1 = document.getElementById('root')
if (!root1) throw new Error('Failed to find the root element')
createRoot(root1).render(<App />)