import { useAuthContext } from "../../context/AuthContext"
import { time } from "../../utils/time"
import useConversation from "../../store/useConversation"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

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

    const getFileExtension = (filename) => {
        return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2)
    }

    const isImage = (filename) => {
        return ['jpg', 'jpeg', 'png', 'gif'].includes(getFileExtension(filename).toLowerCase())
    }

    const isMp3 = (filename) => {
        return getFileExtension(filename).toLowerCase() === 'mp3'
    }
    const getAttachmentUrl = (attachmentPath) => {
        return `http://localhost:5100/${attachmentPath}`
    }
    const [enlargedContent, setEnlargedContent] = useState({ imageUrl: null, username: '' })

    const handleAvatarClick = () => {
        // Set both the image URL and the username for the enlarged view
        setEnlargedContent({ imageUrl: pic, username: sender ? authUser.userName : selectedConversation.userName })
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
            <div
                className='chat-image avatar'
                onClick={handleAvatarClick}
                style={{ cursor: 'pointer' }} // Make the cursor change to a pointer on hover
            >
                <div className='w-11 rounded-full'>
                    <img src={pic} alt="User avatar" />
                </div>
            </div>
            <div>
                {message.attachments && message.attachments.map((attachment, index) => {
                    const fileExtension = getFileExtension(attachment)
                    if (isImage(attachment)) {
                        return (
                            <div key={index} className="attachment" onClick={() => setViewImage(getAttachmentUrl(attachment))}>
                                <img src={getAttachmentUrl(attachment)} alt={`Attachment ${index}`} className="attachment-image" />
                            </div>
                        )
                    } else if (isMp3(attachment)) {
                        return (
                            <audio key={index} controls className="audio-player">
                                <source src={getAttachmentUrl(attachment)} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        )
                    } else {
                        return (
                            <a key={index} href={getAttachmentUrl(attachment)} download className="download-link">
                                <FontAwesomeIcon icon={faDownload} />Download the {fileExtension} file
                            </a>
                        )
                    }
                })}
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
                {enlargedContent.imageUrl && (
                    <div className="image-overlay" onClick={() => setEnlargedContent({ imageUrl: null, username: '' })}>
                        <div className="enlarged-image-container">
                            <img src={enlargedContent.imageUrl} alt="Enlarged" className="enlarged-image" />
                            <div className="username-label">{enlargedContent.username}</div>
                        </div>
                    </div>
                )}
            </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div >
    )
};
export default Message