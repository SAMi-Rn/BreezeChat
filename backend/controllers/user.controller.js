import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const users = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(users);
	} catch (error) {
		console.log("error in getUsers controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
export const updateUserProfile = async (req, res) => {
    const userId = req.user._id; // Assuming you're updating the profile of the logged-in user
    const updates = req.body; // This is the updated data from the front end

    try {
        // Assuming you have some validation for the updates or handle it in middleware
        const user = await User.findByIdAndUpdate(userId, updates, { new: true }).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user); // Respond with the updated user data without the password
    } catch (error) {
        console.error(`Error in updateUserProfile: ${error.message}`);
        res.status(500).json({ message: "Internal server error" });
    }
};