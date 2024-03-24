import { useState } from 'react';
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const updateProfile = async (updatedData) => {
    setLoading(true);

    // Ensure headers include content type and authorization token
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${authUser.token}`);
    
    try {
      const response = await fetch(`/api/users/${authUser._id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(updatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Could not update profile.');
      }

      // Update the context with the new user data
      setAuthUser(prev => ({ ...prev, ...data }));
      localStorage.setItem("breeze-user", JSON.stringify(data));
      // Optionally, show a success message
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateProfile };
};

export default useUpdateProfile;
