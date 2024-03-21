import { Link } from "react-router-dom"
import { useState } from "react"
import useLogin from "../../helper/useLogin"
const Login = () => {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(userName, password)
    }
    return (
        <div >
            <div className="login-box">
                <h2 className="text-xl">Login <span className="text-2xl text-cyan-300 font-semibold">BreezeChat</span></h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input
                            type='text'
                            name="Username"
                            required
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input
                            type='password'
                            name="Username"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                    </div>
                    <div>
                        <button className='btn btn-block btn-m mt-2 border' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                    <Link to='/signup' className="account-link">
                        Don't have an account?
                    </Link>
                </form>
            </div>
        </div >
    )
}

export default Login