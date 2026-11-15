

type LoginProps = {
    onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                onLogin();
            }}>
                <label htmlFor="email">Email or Username:</label>
                <input required type="email" placeholder="Email" />
                <label htmlFor="password">Password:</label>
                <input required type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
 }
export default Login;