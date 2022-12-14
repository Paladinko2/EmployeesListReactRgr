import "../../index.css"

const LoginForm = ({ credentials, onLoginSubmit, handleChange, loginMessage }) => {
    return (
        <form className="loginForm" onSubmit={onLoginSubmit}>
        <div className="container">
            <h1 className="g">Welcome</h1>
            <h3 className="g_small">Log in to get started!</h3>
            <label className="label">Email</label>
            <input
                className="inpsize"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                required
                value={credentials.email}
                onChange={handleChange}
            />
            <label className="label">Password</label>
            <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                required
                value={credentials.password}
                onChange={handleChange}
            />
            <div className="container">{loginMessage}</div>
        </div>
        
        <button className="btn">Log in</button>
    </form>
    );
}

export default LoginForm;