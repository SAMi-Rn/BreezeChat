import React from "react"
const Login = () => {
    return (
        <div >
            <div className="login-box">
                <h2 className="text-xl">Login <span className="text-2xl text-cyan-300 font-semibold">BreezeChat</span></h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="username" required />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    <a href="#">
                        Login
                    </a>
                    <a href="#" className="account-link">
                        Don't have an account?
                    </a>
                </form>
            </div>
        </div >
    )
}

export default Login