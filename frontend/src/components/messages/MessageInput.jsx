import { useState } from "react"
import useSendMessage from "../../helper/useSendMessage"
import { IoMdSend } from "react-icons/io"
import { MdAttachFile } from "react-icons/md"
import useUploadFile from "../../helper/useUploadFile"

const MessageInput = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()
    const [files, setFiles] = useState([])
    const { fileInput, handleFileChange, removeFile } = useUploadFile(setFiles)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message && files.length === 0) {
            return
        }

        await sendMessage(message, files)

        // Resetting the form state
        setMessage("")
        setFiles([])
        // Resetting the file input
        fileInput.current.value = null

    }

    const triggerFileInput = () => {
        fileInput.current.click()
    }
    const truncateFilename = (fullName, maxLength = 10) => {
        const dotIndex = fullName.lastIndexOf('.')
        if (dotIndex === -1) return fullName // no extension found

        const name = fullName.substring(0, dotIndex)
        const extension = fullName.substring(dotIndex) // includes the dot

        if (fullName.length <= maxLength) return fullName // no truncation needed

        // Truncate and add ellipsis
        const truncationLength = maxLength - extension.length - 3 // -3 for the ellipsis and to ensure no overflow
        return name.length > truncationLength ? `${name.substring(0, truncationLength)}...${extension}` : fullName
    }
    return (
        <form className='form-container px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <div className="file-details-container">
                    {files.map(({ file, id }) => (
                        <div className="file-details" key={id}>

                            {file.type.startsWith('image/') && (
                                <div className="image-container">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt="Preview"
                                        className="image-preview"

                                        onLoad={(event) => { // Revoke the data uris to avoid memory leaks
                                            URL.revokeObjectURL(event.target.src)
                                        }}
                                    />

                                </div>
                            )}
                            <span className="file-name" style={{ fontSize: 'small' }}>
                                {truncateFilename(file.name, 15)}
                            </span>
                            <button type="button" className=" pl-2 " onClick={() => removeFile(id)}>X</button>

                        </div>
                    ))}
                </div>
                <div className='input-container relative w-full'>
                    <textarea
                        className='resize-none border text-sm rounded-lg block w-full p-2 bg-neutral-800 border-gray-800 text-white pl-9 pr-8'
                        placeholder='Send a message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                    />
                    <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                        {loading ? <div className='loading loading-spinner'></div> : <IoMdSend size={24} />}
                    </button>
                    <button type='button' className='absolute inset-y-0 start-0 fix items-center pe-3' onClick={triggerFileInput}>
                        <MdAttachFile size={24} />
                        <input
                            ref={fileInput}
                            type='file'
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            multiple // Add this if you want to allow multiple files to be selected
                        />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default MessageInput
