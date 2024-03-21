import useConversation from "../../store/useConversation"
import { useSocketContext } from "../../context/SocketContext"

const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    const isSelected = selectedConversation?._id === conversation._id
    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)
    return (
        <>
            <div
                className={`flex gap-3 items-center hover:bg-cyan-500 rounded p-1 py-1 cursor-pointer
				${isSelected ? "bg-cyan-600" : ""}
			`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.profilePicture}
                            alt='user picture'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.firstName} {conversation.lastName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>

            <div className='divider my-0 py-0 h-1' />
        </>
    )
}
export default Conversation