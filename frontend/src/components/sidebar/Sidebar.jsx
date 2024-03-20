import Conversations from "./Conversations"
import SearchInput from "./Search"
const Sidebar = () => {
    return (
        <div className='border-r border-slate-600 p-5 flex flex-col'>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
        </div>
    )
}
export default Sidebar