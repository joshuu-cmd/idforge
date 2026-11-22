



function Register(){
    return(
        <div className="login-container">
            <h1>Register</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget)
                const username = String(formData.get("username"))
                const password = String(formData.get("password"))
                const confirmPassword = formData.get('confirmPassword')
                if (password != confirmPassword){
                    alert("password mismatch")
                    return
                }
                if (confirm('Account created. Click ok to proceed to Login.')){
                    window.location.href ='/login'
                }
               }}>
                <label >Username:</label>
                <input required name="username"  placeholder="username" />
                <label htmlFor="password">Password:</label>
                <input required name="password" type="password" placeholder="Password" />
                <label>Confirm password:</label>
                <input name="confirmPassword" required type="password" placeholder="confirm password"></input>
                <button type="submit">Register</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    )
}

export default Register;