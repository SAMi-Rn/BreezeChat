import React from "react"
const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-900 bg-opacity-25 backdrop-blur-3xl">
            <div className="login-box">
                <h2>Login <span className="text-blue-300">BreezeChat</span></h2>
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
                    <a href="#" className="block text-start mt-2 text-sm text-cyan-50 hover:underline hover:text-blue-600">
                        Don't have an account?
                    </a>
                </form>
            </div>
        </div >
    )
}

export default Login