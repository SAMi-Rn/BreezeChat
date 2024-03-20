
import Messages from "./Messages"

const MessageContainer = () => {
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            <>
                <div className='bg-slate-600 px-4 py-2 mb-2'>
                    <span className='label-text'></span> <span className='text-gray-900 font-bold'>Sami </span>
                </div>

                <Messages />
            </>
        </div>
    )
}
export default MessageContainer
