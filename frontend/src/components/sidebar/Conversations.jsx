import useGetConversations from "../../helper/useGetConversations"
import { getEmoji } from "../../utils/emoji"
import Conversation from "./Conversation"

const Conversations = () => {
    const { loading, conversations } = useGetConversations()
    return (
        <div className='py-0.5 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}

            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    )
}
export default Conversations