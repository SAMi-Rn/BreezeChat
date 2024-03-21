import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./Search"
const Sidebar = () => {
    return (
        <div className=' bg-neutral-900 border-r border-slate-900 p-9 flex flex-col'>
            <SearchInput />
            <div className=' divider px-2'></div>
            <Conversations />

            <LogoutButton />
        </div>
    )
}
export default Sidebar