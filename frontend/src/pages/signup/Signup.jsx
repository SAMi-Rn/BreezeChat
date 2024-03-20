
const SignUp = () => {

    return (
        <div>
            <div className="login-box">
                <h2 className="text-xl">Sign Up <span className="text-2xl text-cyan-300 font-semibold">BreezeChat</span></h2>
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
                        <label>Confirm Password</label>
                    </div>
                    <a href="#" className="account-link">
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

