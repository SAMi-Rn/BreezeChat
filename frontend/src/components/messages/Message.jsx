import { useAuthContext } from "../../context/AuthContext"
import { time } from "../../utils/time"
import useConversation from "../../store/useConversation"
import React, { useState } from "react"

function Message({ message }) {
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    const sender = message.senderId === authUser._id
    const formattedTime = time(message.createdAt)
    const chatStatus = sender ? "chat-end" : "chat-start"
    const pic = sender ? authUser.profilePicture : selectedConversation?.profilePicture
    const inputColor = sender ? "bg-cyan-600" : ""
    const [viewImage, setViewImage] = useState(null)

    const animation = message.anime ? "anim" : ""

    const isImage = (filename) => {
        return /\.(jpg|jpeg|png|gif)$/i.test(filename)
    }

    const getAttachmentUrl = (attachmentPath) => {
        return `http://localhost:5100/${attachmentPath}`
    }

    const toggleViewImage = (attachment) => {
        if (viewImage === attachment) {
            setViewImage(null) // If the same image is clicked again, close the view
        } else {
            setViewImage(attachment)
        }
    }

    return (
        <div className={`chat ${chatStatus}`}>
            <div className='chat-image avatar'>
                <div className='w-11 rounded-full'>
                    <img src={pic} />
                </div>
            </div>
            <div>
                {message.attachments && message.attachments.map((attachment, index) => (
                    isImage(attachment) ? (
                        <div key={index} className="attachment" onClick={() =>
                            setViewImage(getAttachmentUrl(attachment))}>
                            <img src={getAttachmentUrl(attachment)} alt={`Attachment ${index}`} className="attachment-image" />
                        </div>
                    ) : (
                        <a key={index} href={getAttachmentUrl(attachment)} download>
                            Download Attachment
                        </a>
                    )
                ))}
                {message.message && (
                    <div className={`chat-bubble text-white ${inputColor} ${animation} pb-2`}>
                        {message.message}
                    </div>
                )}

                {viewImage && (
                    <div className="image-overlay" onClick={() => setViewImage(null)}>
                        <img src={viewImage} alt="Enlarged" className="enlarged-image" />
                    </div>
                )}
            </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div >
    )
};
export default Message