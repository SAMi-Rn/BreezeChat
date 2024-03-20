
import Messages from "./Messages"
import MessageInput from "./MessageInput"
import { FiMessageCircle } from "react-icons/fi"

const MessageContainer = () => {
    const ChatSelected = false
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {ChatSelected ? <>
                <div className='bg-slate-600 px-4 py-2 mb-2'>
                    <span className='label-text'></span> <span className='text-gray-900 font-bold'>Sami </span>
                </div>

                <Messages />
                <MessageInput />
            </> : <NoChatSelected />}

        </div>
    )
}
export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome Sami </p>
                <p>Select a chat to start messaging</p>
                <FiMessageCircle className='text-3xl md:text-7xl text-center' />
            </div>
        </div>
    )
}