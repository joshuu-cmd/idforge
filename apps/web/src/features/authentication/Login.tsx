


type LoginProps = {
    onLogin: (name: string) => void;
}

function Login({ onLogin }: LoginProps) {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                const name = new FormData(event.currentTarget).get("name");
                if (typeof name !== "string" || !name.trim().toUpperCase() ) {
                    alert("Please enter your Name"); 
                    return;
                } 
                else {
                    onLogin(name.trim().toUpperCase());
                }
               

            }}>
                <label >Username:</label>
                <input required name="name"  placeholder="username" />
                <label htmlFor="password">Password:</label>
                <input required type="password" placeholder="Password" />
                <button type="submit">Login</button>
                <p>Don't have an account yet? <a href="/register">Register.</a></p>
            </form>
        </div>
    )
 }
export default Login;