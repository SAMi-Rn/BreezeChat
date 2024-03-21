import { IoMdSend } from "react-icons/io"
import { useState } from "react"
import useSendMessage from "../../helper/useSendMessage"

const MessageInput = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage("")
    }

    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <textarea
                    className='resize-none border text-sm rounded-lg block w-full p-2 bg-neutral-800 border-gray-800 text-white pr-8'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <div className='loading loading-spinner'></div> : <IoMdSend />}
                </button>
            </div>
        </form>
    )
}
export default MessageInput
