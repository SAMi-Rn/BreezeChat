import React, { useState } from 'react'
import { useAuthContext } from "../../context/AuthContext"
import useUpdateProfile from '../../helper/useUpdateProfile.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const EditProfileForm = ({ onClose }) => {
    const { authUser } = useAuthContext()
    const { loading, updateProfile } = useUpdateProfile()
    const [showEditProfile, setShowEditProfile] = useState(false)
    // Form state
    const [firstName, setFirstName] = useState(authUser.firstName)
    const [lastName, setLastName] = useState(authUser.lastName)
    const [profilePicture, setProfilePicture] = useState(authUser.profilePicture)
    const handleEditProfileClick = () => {
        setShowEditProfile(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedData = {
            firstName,
            lastName,
            profilePicture
            // Include password and profilePicture if applicable
        }

        try {
            // Call the updateProfile function from your useUpdateProfile hook
            console.log(JSON.stringify(updatedData)) // Check what's being sent
            await updateProfile(updatedData)
            onClose() // Close the modal/form after update
        } catch (error) {
            // Handle errors, such as displaying a notification
            console.error('Failed to update profile', error)
        }
    }

    // Event handler for file input change
    const handleProfilePictureChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            // This assumes you want to use the image as a base64 string
            const reader = new FileReader()
            reader.onload = (e) => {
                setProfilePicture(e.target.result)
            }
            reader.readAsDataURL(event.target.files[0])
        }
    }

    return (
        <div className="edit-profile-form-container" >
            <div className="edit-profile-form" style={{ position: 'relative' }}>
                <form onSubmit={handleSubmit} className="form-layout">
                    {/* Close button positioned absolutely within the container */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '0px', // Adjust top as needed
                            right: '15px', // Adjust right as needed
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: '1.7rem',
                            zIndex: 2, // Ensures it is visually in front
                        }}
                        aria-label="Close edit profile form"
                    >
                        x
                    </button>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilePicture"><FontAwesomeIcon icon={faDownload} /> New Profile Picture</label>
                        <input
                            id="profilePicture"
                            type="file"
                            name=''
                            onChange={handleProfilePictureChange}
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" disabled={loading} className="update-btn">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditProfileForm
