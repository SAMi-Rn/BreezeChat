import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./Search"
const Sidebar = () => {
    return (
        <div className='border-r border-slate-600 p-5 flex flex-col'>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}
export default Sidebar