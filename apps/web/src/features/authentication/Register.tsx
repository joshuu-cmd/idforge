import { useState, type FormEvent } from "react";
import { supabase } from "../../lib/supabase";

function Register() {
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrorMessage("");

        const formData = new FormData(event.currentTarget);
        const username = String(formData.get("username") ?? "").trim().toLowerCase();
        const email = String(formData.get("email") ?? "").trim();
        const password = String(formData.get("password") ?? "");
        const confirmPassword = String(formData.get("confirmPassword") ?? "");

        if (!/^[a-z0-9_]{3,30}$/.test(username)) {
            setErrorMessage("Username must be 3–30 characters using letters, numbers, or underscores.");
            return;
        }

        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        setIsSubmitting(true);
        const { data, error } = await supabase.functions.invoke<{
            session: { access_token: string; refresh_token: string };
            message?: string;
        }>("register-with-username", {
            body: { username, email, password },
        });

        if (error || !data?.session) {
            setIsSubmitting(false);
            setErrorMessage(data?.message ?? error?.message ?? "Could not create your account.");
            return;
        }

        const { error: sessionError } = await supabase.auth.setSession(data.session);
        setIsSubmitting(false);

        if (sessionError) {
            setErrorMessage("Your account was created, but we couldn't sign you in. Please log in.");
            return;
        }

        window.location.href = "/";
    }

    return (
        <div className="login-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input id="username" required name="username" autoComplete="username" placeholder="username" />
                <label htmlFor="email">Email:</label>
                <input id="email" required name="email" type="email" autoComplete="email" placeholder="you@example.com" />
                <label htmlFor="password">Password:</label>
                <input id="password" required name="password" type="password" autoComplete="new-password" />
                <label htmlFor="confirmPassword">Confirm password:</label>
                <input id="confirmPassword" required name="confirmPassword" type="password" autoComplete="new-password" />
                {errorMessage && <p role="alert">{errorMessage}</p>}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register"}
                </button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    );
}

export default Register;
