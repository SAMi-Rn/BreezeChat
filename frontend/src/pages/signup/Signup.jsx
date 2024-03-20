import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from "../../hooks/useSignup"

const SignUp = () => {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        confirmedPassword: "",
    })
    const { loading, signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }
    return (
        <div>
            <div className="login-box">
                <h2 className="text-xl">Sign Up <span className="text-2xl text-cyan-300 font-semibold">BreezeChat</span></h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input
                            type='text'
                            name="First Name"
                            required
                            value={inputs.firstName}
                            onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
                        />
                        <label>First Name</label>
                    </div>
                    <div className="user-box">
                        <input
                            type='text'
                            name="Last Name"
                            required
                            value={inputs.lastName}
                            onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
                        />
                        <label>Last Name</label>
                    </div>
                    <div className="user-box">
                        <input
                            type='text'
                            name="Username"
                            required
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                        />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input
                            type='password'
                            name="password"
                            required
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input
                            type='password'
                            name="confirmPassword"
                            required
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmedPassword: e.target.value })}
                        />
                        <label>Confirm Password</label>
                    </div>
                    <div>
                        <button className='btn btn-block btn-m mt-2 border' >
                            Sign up
                        </button>
                    </div>
                    <Link to="/login" className="account-link">
                        Already have an acount?
                    </Link>
                </form>
            </div>
        </div >
    )

}
export default SignUp;

