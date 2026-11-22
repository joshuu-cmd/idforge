import Dashboard from './pages/Dashboard'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './features/authentication/Login'
import { useState } from 'react'

function App() { 
    const [name, setName] = useState(() => localStorage.getItem("idforge-user") ?? "");
    return name
        ? <Dashboard name={name} onLogout={() => {
            localStorage.removeItem("idforge-user");
            setName("");
        }} />

        : <Login onLogin={(enteredName) => {
            localStorage.setItem("idforge-user", enteredName);
            setName(enteredName);
        }} />;
}

const root1 = document.getElementById('root')
if (!root1) throw new Error('Failed to find the root element')
createRoot(root1).render(<App />)