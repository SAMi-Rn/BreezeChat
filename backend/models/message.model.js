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
        required: function() {
      // Message is required only if there are no attachments
      return this.attachments.length === 0;
    },
    },
     attachments: [{
        type: String,
        default: [],
    }],
}, { timestamps: true })

const Message = mongoose.model("Message", messageSchema)
export default Message;