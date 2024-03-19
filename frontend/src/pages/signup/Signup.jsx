
const SignUp = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-900 bg-opacity-25 backdrop-blur-3xl" >
            <div className="login-box">
                <h2>Sign Up <span className="text-blue-300">BreezeChat</span></h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="First Name" required />
                        <label>First Name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="First Name" required />
                        <label>Last Name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="First Name" required />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" required />
                        <label>Confirmed Password</label>
                    </div>
                    <a href="#" className="block text-start mt-2 text-sm text-cyan-50 hover:underline hover:text-blue-600">
                        Already have an acount?
                    </a>
                    <a href="#">
                        Sign Up
                    </a>
                </form>
            </div>
        </div >
    )

}
export default SignUp;

