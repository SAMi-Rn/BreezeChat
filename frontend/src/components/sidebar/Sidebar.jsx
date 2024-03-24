import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./Search"
import EditProfileButton from "./EditProfileButton"

const Sidebar = () => {
    return (
        <div className='border-r border-slate-900 p-8 pb-4 flex flex-col' style={{ backgroundColor: 'rgba(26, 32, 44, 0.5)' }}>
            <SearchInput />
            <div className=' divider px-0'></div>
            <Conversations />

            <div className='mt-auto flex justify-between '>
                <LogoutButton />
                <EditProfileButton />
            </div>


        </div>
    )
}
export default Sidebar