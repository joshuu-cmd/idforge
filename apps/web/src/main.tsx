import Dashboard from './pages/Dashboard'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './features/authentication/Login'
import Register from './features/authentication/Register'
import { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'

function App() { 
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");

    useEffect(() => {
        let isMounted = true;
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => {
            if (isMounted) {
                setSession(nextSession);
                setIsLoading(false);
            }
        });

        void supabase.auth.getSession().then(({ data, error }) => {
            if (!isMounted) return;
            if (error) setAuthError(error.message);
            setSession(data.session);
            setIsLoading(false);
        });

        return () => {
            isMounted = false;
            subscription.unsubscribe();
        };
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (authError) {
        return <p role="alert">Could not load your session: {authError}</p>;
    }

    if (session) {
        const username = session.user.user_metadata.username;
        const name = typeof username === "string" ? username : session.user.email ?? "User";
        return <Dashboard name={name} onLogout={() => {
            void supabase.auth.signOut();
        }} />
    }

    if (window.location.pathname.toLowerCase() === "/register") {
        return <Register />;
    }

    return <Login />;
}

const root1 = document.getElementById('root')
if (!root1) throw new Error('Failed to find the root element')
createRoot(root1).render(<App />)