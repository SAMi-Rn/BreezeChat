import { useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";


const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message, files = []) => { // Now accepts a `files` parameter
        setLoading(true);
        const formData = new FormData();
        formData.append('message', message);
        files.forEach(({ file }) => formData.append('files', file)); // Assuming each file is in an object with a `file` property

        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                body: formData, // Remove headers for FormData to allow the browser to set the correct Content-Type
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};
export default useSendMessage;
