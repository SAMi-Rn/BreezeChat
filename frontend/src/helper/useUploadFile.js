import { useRef, useState } from "react"
import { toast } from "react-hot-toast"


const useUploadFile = (setExternalFiles) => {
    const fileInput = useRef(null);

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files).map((file) => ({
            file,
            id: Date.now() + Math.random().toString(36).substr(2, 9), // Unique identifier
        }));
        setExternalFiles((currentFiles) => [...currentFiles, ...newFiles]);
        console.log('File(s) selected');
    };

    // Function to remove a file from the list
    const removeFile = (id) => {
        setExternalFiles((currentFiles) => currentFiles.filter((f) => f.id !== id));
    };


    return { fileInput, handleFileChange, removeFile };

}

export default useUploadFile