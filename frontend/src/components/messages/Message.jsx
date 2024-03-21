import { useAuthContext } from "../../context/AuthContext"
import { time } from "../../utils/time"
import useConversation from "../../store/useConversation"

function Message({ message }) {
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    const sender = message.senderId === authUser._id
    const formattedTime = time(message.createdAt)
    const chatStatus = sender ? "chat-end" : "chat-start"
    const pic = sender ? authUser.profilePicture : selectedConversation?.profilePicture
    const inputColor = sender ? "bg-cyan-600" : ""

    const animation = message.anime ? "anim" : ""
    return (
        <div className={`chat ${chatStatus}`}>
            <div className='chat-image avatar'>
                <div className='w-11 rounded-full'>
                    <img src={pic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${inputColor} ${animation} pb-2`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div>
    )
};
export default Message