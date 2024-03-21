
import Messages from "./Messages"
import MessageInput from "./MessageInput"
import { FiMessageCircle } from "react-icons/fi"
import useConversation from "../../store/useConversation"
import { useEffect } from "react"
import { useAuthContext } from "../../context/AuthContext"
import { getEmoji } from "../../utils/emoji"

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className='md:min-w-[750px] flex flex-col'>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className=' bg-neutral-900 px-4 py-2 mb-2'>
                        <span className='text-neutral-300 font-bold'>{selectedConversation.firstName} {selectedConversation.lastName} {getEmoji()}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}
export default MessageContainer

const NoChatSelected = () => {
    const { authUser } = useAuthContext()
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {authUser.firstName}</p>
                <p>Select a chat to start messaging</p>
                <FiMessageCircle className='text-3xl md:text-7xl text-center' />
            </div>
        </div>
    )
}