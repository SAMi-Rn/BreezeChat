import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import path from 'path';
import fs from 'fs';
export const getMessages = async (req, res) => {
	try {
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			members: { $all: [senderId, receiverId] },
		}).populate("messages");

		if (!conversation) {
			return res.status(200).json({ messages: [] });
		}

		res.status(200).json(conversation.messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}
export const sendMessage = async (req, res) => {
	try {
		
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;
		const files = req.files;

		let conversation = await Conversation.findOne({
			members: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				members: [senderId, receiverId],
			});
		}
 		 const attachments = files ? files.map(file => {
        // Create a new filename with the original extension
        const ext = path.extname(file.originalname);
        const newFilename = file.filename + ext;

        // Rename the file in the filesystem
        fs.renameSync(file.path, path.join(file.destination, newFilename));

        // Return the new path with the extension
        return path.join(file.destination, newFilename);
    }) : [];
		const newMessage = new Message({
			senderId,
			receiverId,
			message,
			attachments
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}
		await Promise.all([conversation.save(), newMessage.save()]);
		const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};