import Dashboard from './pages/Dashboard'
import { createRoot } from 'react-dom/client'
import './index.css'



const root1 = document.getElementById('root')
if (!root1) throw new Error('Failed to find the root element')
createRoot(root1).render(<Dashboard />)