import { useEffect, useRef, useState } from "react"
import Message from './Message'
import useListenMessages from "../../helper/useListenMessages"
import useGetMessages from "../../helper/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton"
import { format, isToday, isYesterday } from 'date-fns' // Make sure to install date-fns if not already

const Messages = () => {
    const { messages, loading } = useGetMessages()
    useListenMessages()
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // Group messages by date
    const groupMessagesByDate = (messages) => {
        return messages.reduce((groups, message) => {
            const date = new Date(message.createdAt)
            const dateKey = isToday(date) ? 'Today' : isYesterday(date) ? 'Yesterday' : format(date, 'PP')
            if (!groups[dateKey]) {
                groups[dateKey] = []
            }
            groups[dateKey].push(message)
            return groups
        }, {})
    }

    const groupedMessages = groupMessagesByDate(messages)

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && Object.entries(groupedMessages).map(([date, messagesInGroup]) => (
                <div key={date} className="message-group">
                    <h2 className="date-label">{date}</h2>
                    {messagesInGroup.map(message => (
                        <Message key={message._id} message={message} />
                    ))}
                </div>
            ))}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length === 0 && (
                <p className='text-center'>Start the conversation</p>
            )}
            <div ref={messagesEndRef} />
        </div>
    )
}
export default Messages
