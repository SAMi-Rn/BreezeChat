import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: "Sender is required"
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: "Receiver is required",
    },
    message: {
        type: String,
        required: "Message is required",
    }
}, { timestamps: true })

const Message = mongoose.model("Message", messageSchema)
export default Message;