import { CgSearch } from "react-icons/cg"
import useConversation from "../../store/useConversation"
import useGetConversations from "../../helper/useGetConversations"
import toast from "react-hot-toast"
import { useState } from "react"

const SearchInput = () => {
    const [search, setSearch] = useState("")
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return
        if (search.length < 2) {
            return toast.error("Search must be at least 2 characters")
        }

        const conversation = conversations.find((c) => c.firstName.toLowerCase().includes(search.toLowerCase()))

        if (conversation) {
            setSelectedConversation(conversation)
            setSearch("")
        } else toast.error("User was not found!")
    }
    return (
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input
                type='text'
                placeholder='Search…'
                className='input input-bordered rounded-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <CgSearch className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}
export default SearchInput