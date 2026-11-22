import Dashboard from './pages/Dashboard'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './features/authentication/Login'
import Register from './features/authentication/Register'
import { useState } from 'react'

function App() { 
    const [name, setName] = useState(() => localStorage.getItem("idforge-user") ?? "");
    if (name) {
        return <Dashboard name={name} onLogout={() => {
            localStorage.removeItem("idforge-user");
            setName("");
        }} />
    }

    if (window.location.pathname.toLowerCase() === "/register") {
        return <Register />;
    }

    return <Login onLogin={(enteredName) => {
        localStorage.setItem("idforge-user", enteredName);
        setName(enteredName);
    }} />;
}

const root1 = document.getElementById('root')
if (!root1) throw new Error('Failed to find the root element')
createRoot(root1).render(<App />)