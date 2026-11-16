

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
                <label >Email or Username:</label>
                <input required name="name"  placeholder="Email" />
                <label htmlFor="password">Password:</label>
                <input required type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
 }
export default Login;