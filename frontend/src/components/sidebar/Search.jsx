import { CgSearch } from "react-icons/cg"

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-slate-800 text-white'>
                <CgSearch className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}
export default SearchInput