
const Login = () => {
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-7 rounded-e-lg shadow-md bg-red-200 bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-10">
            <h1 className="text-3xl font-bold text-center  text-red-600">
                Login
                <span className="text-blue-700"> BreezeChat</span>
            </h1>

            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-red-900">Username</span>
                    </label>
                    <input type="text" className="w-full input input-bordered h-10" placeholder="Enter your Username" />
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-red-900">Password</span>
                    </label>
                    <input type="password" className="w-full input input-bordered h-10" placeholder="Enter your Password" />
                </div>
                <a href="#" className="text-sm text-black hover:underline hover:text-blue-600 mt-2 inline-block">
                    {"Don't"}have an acount?
                </a>
                <div>
                    <button type="submit" className="btn btn-block btn-sm mt-2">
                        Login
                    </button>
                </div>
            </form>
        </div>

    </div>

}

export default Login
