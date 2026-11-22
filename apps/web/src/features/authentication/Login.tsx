


import { useState, type FormEvent } from "react";
import { supabase } from "../../lib/supabase";

function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrorMessage("");

        const formData = new FormData(event.currentTarget);
        const username = String(formData.get("username") ?? "").trim().toLowerCase();
        const password = String(formData.get("password") ?? "");

        if (!/^[a-z0-9_]{3,30}$/.test(username) || !password) {
            setErrorMessage("Enter a valid username and password.");
            return;
        }

        setIsSubmitting(true);
        const { data, error } = await supabase.functions.invoke<{
            session: { access_token: string; refresh_token: string };
        }>("login-with-username", { body: { username, password } });

        if (error || !data?.session) {
            setIsSubmitting(false);
            setErrorMessage("Username or password is incorrect.");
            return;
        }

        const { error: sessionError } = await supabase.auth.setSession(data.session);
        setIsSubmitting(false);

        if (sessionError) {
            setErrorMessage("Could not start your session. Please try again.");
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input required id="username" name="username" autoComplete="username" placeholder="username" />
                <label htmlFor="password">Password:</label>
                <input required id="password" name="password" type="password" autoComplete="current-password" placeholder="Password" />
                {errorMessage && <p role="alert">{errorMessage}</p>}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
                <p>Don't have an account yet? <a href="/register">Register.</a></p>
            </form>
        </div>
    )
}

export default Login;