// EditProfileButton.jsx
import React, { useState } from 'react'
import EditProfileForm from './EditProfileForm'
import { useAuthContext } from '../../context/AuthContext'

const EditProfileButton = () => {
    const [isEditing, setIsEditing] = useState(false)
    const { authUser } = useAuthContext()

    const handleEditClick = () => {
        setIsEditing(true)
    }

    return (
        <div>
            <img src={authUser.profilePicture} alt="Profile" className="
                w-8 h-8 rounded-xl cursor-pointer" onClick={handleEditClick} />
            {isEditing && <EditProfileForm onClose={() => setIsEditing(false)} />}
        </div>
    )
}

export default EditProfileButton
