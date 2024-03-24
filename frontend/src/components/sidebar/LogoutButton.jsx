import { BiLogOut } from "react-icons/bi"
import useLogout from "../../helper/useLogout"

const LogoutButton = () => {
    const { loading, logout } = useLogout()

    return (
        <div>
            {!loading ? (
                <BiLogOut className='w-7 h-9 text-white cursor-pointer' onClick={logout} />
            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </div>
    )
}
export default LogoutButton